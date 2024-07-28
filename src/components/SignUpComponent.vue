<template>
    <LoadingOverlay :isLoading="isLoading" />

    <div>

        <!-- Modal 1 email address -->

        <transition name="fade">
            <div v-if="step === 1" class="modal fade show d-block" tabindex="-1" role="dialog"
                aria-labelledby="emailModalLabel" :aria-hidden="step !== 1">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="emailModalLabel">Inscription</h5>
                            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submitEmail">
                                <!-- Form Fields -->

                                <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>

                                <div class="mb-3">
                                    <label for="email">Adresse email</label>
                                    <input type="email" class="form-control" id="email" v-model="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="username">Nom d'utilisateur</label>
                                    <input class="form-control" id="username" v-model="username" required>
                                </div>
                                <RecaptchaComponent v-if="showRecaptcha" class="mb-3" ref="refRecaptchaComponent"
                                    @tokenObtained="handleTokenObtained" />
                                <button v-if="submitVisible" type="submit" class="btn btn-primary">Soumettre</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </transition>


        <!-- Modal 2 validation code -->

        <div v-if="step === 2" class="modal fade show d-block" tabindex="-1" role="dialog"
            aria-labelledby="validationModalLabel" :aria-hidden="step !== 2">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="validationModalLabel">Validation de l'adresse email</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>

                        <form @submit.prevent="validateEmail">
                            <!-- Form Fields -->
                            <div class="mb-3">
                                <label for="validationCode">Code de Validation</label>
                                <input class="form-control" id="validationCode" v-model="validationCode" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Soumettre le code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 3 info -->

        <div v-if="step === 3" class="modal fade show d-block" tabindex="-1" role="dialog"
            aria-labelledby="infoModalLabel" :aria-hidden="step !== 3">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoModalLabel">Formulaire d'inscription</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>

                        <form @submit.prevent="submitForm">
                            <!-- Form Fields -->
                            <div class="mb-3">
                                <label for="surname">Prénom</label>
                                <input class="form-control" id="surname" v-model="surname" required>
                            </div>
                            <div class="mb-3">
                                <label for="name">Nom</label>
                                <input class="form-control" id="name" v-model="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="organization">Société</label>
                                <input class="form-control" id="organization" v-model="organization" required>
                            </div>
                            <div class="mb-3">
                                <label for="tel">Téléphone</label>
                                <input class="form-control" id="tel" v-model="tel" required>
                            </div>
                            <div class="mb-3">
                                <label for="username">Nom d'utilisateur</label>
                                <input class="form-control" id="username" v-model="username" readonly
                                    autocomplete="username" required>
                            </div>
                            <div class="mb-3">
                                <label for="password">Mot de Passe</label>
                                <input class="form-control" type="password" id="password" v-model="password"
                                    autocomplete="new-password" required>
                            </div>
                            <div class="mb-3">
                                <label for="password2">Confirmation du Mot de passe</label>
                                <input class="form-control" type="password" id="password2" v-model="password2"
                                    autocomplete="new-password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Soumettre le formulaire</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 4 signin -->

        <div v-if="step === 4" class="modal fade show d-block" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="validationModalLabel">Félicitations ! Votre inscription a été validée.</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div v-if="alert_content" :class="['alert', alert_class]">{{ alert_content }}</div>

                    </div>
                    <div class="modal-footer">
                        <RecaptchaComponent v-if="showRecaptcha" class="mb-3" ref="refRecaptchaComponent"
                        @tokenObtained="handleTokenObtained" />
                        <button v-if="submitVisible" type="button" class="btn btn-primary" @click="signin">Se connecter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RecaptchaComponent from './RecaptchaComponent.vue'
import LoadingOverlay from './LoadingOverlay.vue'
import loglevel from 'loglevel'
import { devMode, fetchServer } from '../utility';
const logger = loglevel.getLogger('SignUpComponent')
logger.setLevel('debug')
// import { useRecaptcha } from '../composables/useRecaptcha';

// const { executeRecaptcha } = useRecaptcha('6Lf-thIqAAAAALpcZOCj25OR-Ix8bHJxxdtUjsES');

const isLoading = ref(false)

const showRecaptcha = ref(true)
const alert_content = ref(`Entrez votre adresse email et choisissez un nom d'utilisateur`)
const alert_class = ref('alert-success')

const step = ref(0)
const email = ref('');
const validationCode = ref('')
const surname = ref('')
const name = ref('')
const organization = ref('')
const tel = ref('')
const username = ref('')
const password = ref('');
const password2 = ref('')

const refRecaptchaComponent = ref(null)
const recaptchaToken = ref('')

const submitEmail = async () => {

    const regex = /^[a-z0-9_-]{3,15}$/
    if (!regex.test(username.value)) {
        alert_content.value = `Le nom d'utilisateur doit comporter entre 3 et 15 caractères minuscules, chiffres ou - (tiret) ou _ (underscore)`
        alert_class.value = 'alert-danger'
        return
    }

    try {

        // const recaptchaToken = await executeRecaptcha();
        // Envoyez le formulaire avec le token reCAPTCHA
        // console.log('reCAPTCHA token:', recaptchaToken);

        isLoading.value = true
        showRecaptcha.value = false
        submitVisible.value = false

        await fetchServer("/api/signup_email", undefined, "post", {
            email: email.value,
            username: username.value,
            recaptchaToken: recaptchaToken.value
        })

        alert_content.value = `Un code de validation a été envoyé à ${email.value}`
        alert_class.value = 'alert-success'

        step.value = 2

    } catch (error) {
        console.error('reCAPTCHA error:', error);
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
    }
    finally {
        showRecaptcha.value = true
        isLoading.value = false
    }
};

/**
 * 
 */
const validateEmail = async () => {
    try {
        isLoading.value = true

        await fetchServer("/api/signup_code", undefined, "post", {
            email: email.value,
            validationCode: validationCode.value
        })

        alert_content.value = `L'adresse mail ${email.value} a été validée`
        alert_class.value = 'alert-success'

        step.value = 3
    }
    catch (error) {
        logger.error(error)
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
    }
    finally {
        isLoading.value = false
    }
}

/**
 * 
 */
const submitForm = async () => {

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

        await fetchServer("/api/signup_form", undefined, "post", {
            email: email.value,
            surname: surname.value, name: name.value,
            organization: organization.value, 
            tel: tel.value, 
            password: password.value,
            welcome_subject: welcome_subject,
            welcome_text: welcome_text,
            welcome_html: welcome_html
        })

        alert_content.value = `Votre compte utilisateur ${username.value} attaché à ${email.value} a été créé avec succès`
        alert_class.value = 'alert-success'

        step.value = 4
        showRecaptcha.value = true
    }
    catch (error) {
        logger.error(error)
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
    }
    finally {
        isLoading.value = false
    }
}

/**
 * 
 */
const signin = async () => {
    try {
        isLoading.value = true
        showRecaptcha.value = false
        submitVisible.value = false

        await fetchServer("/api/signin_username", undefined, "post", {
            user_name: username.value, 
            user_password: password.value,
            recaptchaToken: recaptchaToken.value 
        })

        const homepage = devMode('/cyk/#/run/accounting')
        window.open(homepage, 'cyk-compta')

        step.value = 0
    }
    catch (error) {
        alert_content.value = error as string
        alert_class.value = 'alert-danger'
    }
    finally {
        showRecaptcha.value = true
        isLoading.value = false
    }
}

/**
 * 
 */
const signup = () => {
    step.value = 1
    alert_content.value = `Entrez votre adresse email et choisissez un nom d'utilisateur`
    alert_class.value = 'alert-success'
    showRecaptcha.value = true
}

const closeModal = () => {
    step.value = 0
}

defineExpose({ signup })

const submitVisible = ref(false)

const handleTokenObtained = (token: string) => {
    submitVisible.value = true
    recaptchaToken.value = token
}

/**
 * welcome message
 */

const server_url = 'https://compta.cyklang.net'

const welcome_subject = `Merci d'avoir choisi CYK Compta !`;

const welcome_text = `Félicitations !

Vous êtes maintenant inscrit à ${server_url}

Votre nom d'utilisateur est : ${username.value}

Merci d'avoir choisi un logiciel CykLang.net !

`;


const welcome_html = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue sur CYK Compta</title>
</head>
<body>
    <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr>
            <td style="background-color: #f7f7f7; padding: 20px; text-align: center;">
                <h1>Bienvenue sur CYK Compta !</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; background-color: #ffffff;">
                <p>Bonjour ${surname.value} ${name.value} ,</p>
                <p>Nous vous souhaitons la bienvenue sur CYK Compta et vous remercions de votre inscription !</p>
                <p>Votre compte a été créé avec succès et vous pouvez dès à présent accéder à nos services en vous connectant avec 
                le nom d'utilisateur <i>${username.value}</i> et le mot de passe que vous avez choisi lors de l'inscription.</p>
                
                <h2>Voici quelques étapes pour bien démarrer :</h2>
                <ol>
                    <li><strong>Connectez-vous à votre compte</strong> : Visitez notre site <a href="${server_url}/cyk/#/run/accounting" target="_blank">${server_url}/cyk/#/run/accounting</a> et connectez-vous avec vos identifiants.</li>
                    <li><strong>Explorez nos fonctionnalités</strong> : Découvrez les outils et fonctionnalités disponibles pour simplifier votre gestion comptable.</li>
                    <li><strong>Accédez à notre support</strong> : Si vous avez des questions ou besoin d'aide, n'hésitez pas à consulter notre <a href="${server_url}" target="_blank">site web</a> ou à nous contacter directement.</li>
                </ol>

                <h2>Ressources utiles pour vous :</h2>
                <ul>
                    <li><a href="${server_url}" target="_blank">Guide de démarrage rapide [ à venir ]</a></li>
                    <li><a href="${server_url}" target="_blank">Vidéos tutoriels [ à venir ]</a></li>
                    <li><a href="${server_url}" target="_blank">Blog de conseils comptables [ à venir ]</a></li>
                </ul>

                <p>Nous sommes ravis de vous compter parmi nos utilisateurs et nous nous engageons à vous fournir un service de qualité pour répondre à tous vos besoins comptables.</p>
                <p>Si vous avez la moindre question ou besoin d'assistance, notre équipe de support est à votre disposition.</p>
                <p>Merci de votre confiance et à très bientôt sur CYK Compta !</p>

                <p>Cordialement,</p>
                <p>L'équipe CYK Compta<br>
                <a href="${server_url}" target="_blank">${server_url}</a><br>
                <a href="mailto:pchaneyo@cyklang.net">pchaneyo@cyklang.net</a></p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f7f7f7; padding: 10px; text-align: center; font-size: 12px;">
                <p>Ce message a été envoyé automatiquement, veuillez ne pas y répondre directement.</p>
            </td>
        </tr>
    </table>
</body>
</html>

`

</script>

<style scoped>
.modal.show {
    display: block;
    opacity: 1;
}

.modal.fade {
    transition: opacity 0.15s linear;
}

.d-block {
    display: block;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>