<template>

    <LoadingOverlay :isLoading="isLoading" />

    <div v-if="step === 1" class="modal fade show d-block" tabindex="-1" role="dialog"
        aria-labelledby="emailModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emailModalLabel">Se connecter</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitUsername">
                        <!-- Form Fields -->

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>
                        <div class="mb-3">
                            <label for="username">Nom d'utilisateur</label>
                            <input class="form-control" id="username" v-model="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="password">Mot de Passe</label>
                            <input class="form-control" type="password" id="password" v-model="password"
                                autocomplete="new-password" required>
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
import { devMode, fetchServer } from '../utility';
const logger = loglevel.getLogger('SignInComponent.vue')
logger.setLevel('debug')

const isLoading = ref(false)
const showRecaptcha = ref(true)
const alert_content = ref(`Entrez votre nom d'utilisateur et mot de passe`)
const alert_class = ref('alert-info')
const step = ref(0)
const username = ref('')
const password = ref('');
const refRecaptchaComponent = ref(null)
const recaptchaToken = ref('')

const submitUsername = async () => {

    try {
        isLoading.value = true
        showRecaptcha.value = false
        submitVisible.value = false

        await fetchServer("/api/signin_username", undefined, "post", { 
            user_name: username.value, 
            user_password: password.value, 
            recaptchaToken: recaptchaToken.value 
        })

        step.value = 0

        const href = devMode('/cyk/#/run/accounting')
        const newtab = window.open(href, 'cyk-compta')
        if (newtab === null) {
            window.location.href = href
        }
        else {
            window.location.reload()
        }
        
    }
    catch (err) {
        logger.error(err)
        alert_content.value = err as string
        alert_class.value = 'alert-danger'
        showRecaptcha.value = true
    }
    finally {
        isLoading.value = false
    }
}

const signin = () => {
    alert_content.value = `Entrez votre nom d'utilisateur et mot de passe`
    alert_class.value = 'alert-info'
    showRecaptcha.value = true
    step.value = 1
}

const closeModal = () => {
    step.value = 0
}

defineExpose({ signin })

const submitVisible = ref(false)

const handleTokenObtained = (token: string) => {
    submitVisible.value = true
    recaptchaToken.value = token
}

</script>