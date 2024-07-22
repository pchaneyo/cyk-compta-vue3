<template>
    <div>
        <div ref="recaptchaContainer"></div>
        <!-- <button @click="onSubmit">Submit</button> -->
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import loglevel from 'loglevel'
const logger = loglevel.getLogger('RecaptchaComponent.vue')
logger.setLevel('debug')

const recaptchaContainer = ref<HTMLElement | null>(null);
const recaptchaToken = ref<string | null>(null);

const emits = defineEmits(['tokenObtained'])

const loadRecaptchaScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.head.appendChild(script);
    });
};

const renderRecaptcha = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
                logger.debug('window.grecaptcha.render', window.grecaptcha.render);
                if (recaptchaContainer.value) {
                    window.grecaptcha.render(recaptchaContainer.value, {
                        sitekey: '6LfrLhMqAAAAAHH_ump96fCK6hN4hmL6gKJL9vFC',
                        callback: (token: string) => {
                            recaptchaToken.value = token;
                            emits('tokenObtained', token);
                            logger.debug('tokenObtained emitted');
                            resolve(token);
                        },
                        'error-callback': (error: any) => {
                            logger.error('reCAPTCHA error', error);
                            reject(new Error('reCAPTCHA error'));
                        }
                    });
                } else {
                    const error = 'recaptchaContainer is not defined';
                    logger.error(error);
                    reject(new Error(error));
                }
            });
        } else {
            const error = 'window.grecaptcha is not defined';
            logger.error(error);
            reject(new Error(error));
        }
    });
};


onMounted(async () => {
    try {
        await loadRecaptchaScript();
        await renderRecaptcha()
    }
    catch (err) {
        logger.error(err)
    }
});



defineExpose({recaptchaToken, renderRecaptcha});

</script>

<style scoped>
/* Add your styles here */
</style>