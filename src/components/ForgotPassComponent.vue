<template>

    <LoadingOverlay :isLoading="isLoading" />

    <div v-if="step === 1" class="modal fade show d-block" tabindex="-1" role="dialog"
        aria-labelledby="emailModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emailModalLabel">Réinitialiser le mot de passe</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitEmail">
                        <!-- Form Fields -->

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>
                        <div class="mb-3">
                            <label for="email">Adresse email</label>
                            <input class="form-control" id="email" v-model="email" required>
                        </div>

                        <RecaptchaComponent v-if="showRecaptcha" class="mb-3" ref="refRecaptchaComponent"
                            @tokenObtained="handleTokenObtained" />
                        <button v-if="submitVisible" type="submit" class="btn btn-primary">Soumettre</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

import RecaptchaComponent from './RecaptchaComponent.vue'
import LoadingOverlay from './LoadingOverlay.vue'
import loglevel from 'loglevel'
import { ref } from 'vue';
import { fetchServer } from '../utility';
const logger = loglevel.getLogger('ForgotPassComponent.vue')
logger.setLevel('debug')

const isLoading = ref(false)
const showRecaptcha = ref(true)
const alert_content = ref(`Entrez votre adresse email`)
const alert_class = ref('alert-info')
const step = ref(0)

const email = ref('')
const refRecaptchaComponent = ref(null)
const recaptchaToken = ref('')

/**
 * 
 */
const submitEmail = async () => {

    try {
        isLoading.value = true
        showRecaptcha.value = false
        submitVisible.value = false

        await fetchServer("/api/reset_pass_email", undefined, "post", {
            user_email: email.value,
            recaptchaToken: recaptchaToken.value
        })

        alert_content.value = `Un lien valide durant 1 heure vous a été envoyé pour vous permettre de réinitialiser le mot de passe`
        alert_class.value = 'alert-success'

    }
    catch (error) {
        console.error('reCAPTCHA error:', error);
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
        showRecaptcha.value = true
    }
    finally {
        isLoading.value = false
    }
}

/**
 * 
 */
const forgotpass = () => {
    alert_content.value = `Entrez votre adresse email`
    alert_class.value = 'alert-info'
    showRecaptcha.value = true
    step.value = 1
}

const closeModal = () => {
    step.value = 0
}

defineExpose({forgotpass})

const submitVisible = ref(false)

const handleTokenObtained = (token: string) => {
    submitVisible.value = true
    recaptchaToken.value = token
}

</script>
