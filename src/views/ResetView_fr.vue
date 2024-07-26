<template>

    <LoadingOverlay :isLoading="isLoading" />

    <!-- Step 1 : new password -->

    <div v-if="step === 1" class="modal fade show d-block" tabindex="-1" role="dialog"
        aria-labelledby="emailModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="emailModalLabel">Réinitialiser le Mot de Passe</h5>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitPassword">
                        <!-- Form Fields -->

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>

                        <div class="mb-3">
                            <label for="username">Nom d'utilisateur</label>
                            <input class="form-control" id="username" v-model="username" readonly
                                autocomplete="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="password">Nouveau Mot de Passe</label>
                            <input class="form-control" type="password" id="password" v-model="password"
                                autocomplete="new-password" required>
                        </div>
                        <div class="mb-3">
                            <label for="password2">Confirmation du Nouveau Mot de passe</label>
                            <input class="form-control" type="password" id="password2" v-model="password2"
                                autocomplete="new-password" required>
                        </div>

                        <RecaptchaComponent v-if="showRecaptcha" class="mb-3" ref="refRecaptchaComponent"
                            @tokenObtained="handleTokenObtained" />
                        <button v-if="submitVisible" type="submit" class="btn btn-primary">Soumettre le mot de
                            passe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

import RecaptchaComponent from '../components/RecaptchaComponent.vue'
import LoadingOverlay from '../components/LoadingOverlay.vue'
import loglevel from 'loglevel'
import { ref } from 'vue';
import { fetchServer } from '../utility';
import { useRoute } from 'vue-router';
const logger = loglevel.getLogger("ResetView.vue")
logger.setLevel("debug")

const route = useRoute()
const username = route.params.username
const resetToken = route.params.token
logger.debug('resetToken', resetToken)

const isLoading = ref(false)
const showRecaptcha = ref(true)
const alert_content = ref(`Entrez le nouveau mot de passe`)
const alert_class = ref('alert-info')

const step = ref(1)
// const username = ref('')
const password = ref('');
const password2 = ref('')
const submitVisible = ref(false)

const refRecaptchaComponent = ref(null)
const recaptchaToken = ref('')

/**
 * 
 */
const submitPassword = async () => {
    if (password.value.trim().length < 8) {
        alert_content.value = `Le mot de passe doit faire au moins 8 caractères`
        alert_class.value = 'alert-danger'
        return
    }
    if (password.value !== password2.value) {
        alert_content.value = `Le mot de passe est différent de sa confirmation`
        alert_class.value = 'alert-danger'
        return
    }
    try {
        isLoading.value = true
        showRecaptcha.value = false
        submitVisible.value = false

        await fetchServer("/api/reset_pass_change", undefined, "post", {
            user_password: password.value,
            recaptchaToken: recaptchaToken.value,
            resetToken: resetToken
        })

        alert_content.value = `Votre mot de passe a été modifié avec succès`
        alert_class.value = 'alert-success'

    }
    catch (error) {
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
        showRecaptcha.value = true
    }
    finally {
        isLoading.value = false
    }
}

const handleTokenObtained = (token: string) => {
    submitVisible.value = true
    recaptchaToken.value = token
}

</script>