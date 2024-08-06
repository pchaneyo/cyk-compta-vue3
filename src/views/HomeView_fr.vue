<template>
  <HeaderComponent @signup="handleSignUp" @signin="handleSignIn" @signout="handleSignOut"
    @forgotpass="handleForgotPass" />
  <SignUpComponent ref="refSignUpComponent" />
  <SignInComponent ref="refSignInComponent" />
  <ForgotPassComponent ref="refForgotPassComponent" />

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up" data-aos-delay="200">
          <h1>CYK Compta</h1>
          <h2>Application Web de Comptabilité Générale et Auxiliaire
          </h2>
          <div v-if="!useStore().currentUser" class="d-flex justify-content-center justify-content-lg-start">
            <a href="#" class="btn-get-started" @click="handleSignUp">S'inscrire</a>
            <a href="#" class="btn-watch-video" @click="handleSignIn"><i class="bi bi-box-arrow-in-right"></i><span>Se
                connecter</span></a>
          </div>
          <div v-else class="d-flex justify-content-center justify-content-lg-start">
            <a href="#" class="btn-get-started" @click="handleOpen">Ouvrir</a>
            <a href="#" class="btn-watch-video" @click="handleSignOut"><i
                class="bi bi-box-arrow-right"></i><span>Déconnecter</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="../assets/img/hero-img.png" class="img-fluid animated" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">

    <!-- ======= About Us Section ======= -->
    <section id="why" class="about">
      <div class="container">

        <div class="section-title">
          <h2>Pourquoi CYK Compta</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              CYK Compta est le premier module de la trilogie CykLang.net comprenant aussi CYK Factu et CYK Paye.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Application Web</h5>
                Utilisable depuis tout ordinateur, tablette ou mobile connecté à Internet, sans nécessiter aucune
                installation.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Gamme complète de gestion</h5>
                Avec les modules CYK Factu et CYK Paye, la gamme de logiciels CYKLang.net couvre l'ensemble
                des besoins de gestion de l'entreprise.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Développements spécifiques</h5>
                Tous nos logiciels sont développés avec le nouveau langage CYKLang.net, offrant ainsi des avantages
                incomparables
                pour répondre aux besoins de développements spécifiques.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Tarification attrayante</h5>
                De la gratuité pour un usage limité en nombre d'écritures jusqu'à la possibilité d'un serveur privatif.
              </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              CYK Compta intègre toutes les fonctionnalités que vous attendez d'une application de comptabilité:
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Importation et exportation de fichiers FEC</h5>
                Transférez votre comptabilité en important un Fichier des Ecritures Comptables.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Modèles de pièces comptables</h5>
                Paramétrez des modèles de pièces comptables pour permettre la saisie sans connaissance du débit/crédit.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5></h5>
                Le langage est limité dans ses fonctionnalités et est plus facile à sécuriser qu'un langage universel
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Economise une couche de logiciel</h5>
                Interface Client / Serveur devient transparente.
                Si CykLang est utilisé pour le Front end, la distribution des traitements entre navigateur et serveur
                est
                automatique
                et transparente. Mais le programmeur peut aussi spécifier les fonctions qui doivent être traitées sur le
                serveur à des fins d'optimisation.
              </li>
              <a href="../docs/fr/guide/" class="btn-learn-more mt-5">En savoir plus</a>
            </ul>

          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ====== Case Study ======-->

    <section id="casestudy">

      <!-- ======= Introduction ======-->

      <section id="introduction" class="about">
        <div class="container">
          <div class="section-title">
            <h2>Exemples</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykexamples.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>

              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#cinemacase">
                    <h5>Cinéma: acteurs et films</h5>
                  </a>
                  Application Complète. Une base de données cinématographique avec gestion des images d'acteurs et de
                  films
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#weathercase">
                    <h5>Météorologie</h5>
                  </a>
                  Front End et Microservices. Afficher la météo en temps réél en plusieurs lieux du monde.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#blogcase">
                    <h5>Magazine en ligne</h5>
                  </a>
                  Back End. Publier un magazine illustré en ligne.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#comptacase">
                    <h5>Gestion Comptable</h5>
                  </a>
                  Application Complète. Une comptabilité en partie double avec un code source
                  organisé en modules et des formulaires construits dynamiquement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ======= Cinema section ======-->

      <section id="cinemacase" class="about">
        <div class="container">
          <div class="section-title">
            <h2>Cinéma : Acteurs et Films</h2>
          </div>
          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykcinema.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Entrez vos acteurs et vos films préférés dans cette base de données cinématographiques.

              </p>
              <p>Nous allons apprendre à :</p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Créer des tables</h5> et les relations entre elles
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Saisir des données dans les tables</h5> avec un programme CRUD généré par le client CYK
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Manipuler des images</h5> en les recadrant, tournant, zoomant
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Utiliser la commande CYK</h5> pour gérer les droits d'accès et les
                  utilisateurs
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Ecrire des instructions en langage CYK</h5> pour personnaliser le menu latéral,
                  ajouter une liste dans un formulaire, modifier le SQL d'une requête
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;Vidéo</span>
                </a>

              </div>

            </div>
          </div>
        </div>

      </section>

      <!-- ======= End Cinema section ======-->

      <!-- ======= Weather case ======-->

      <section id="weathercase" class="about">
        <div class="container">

          <div class="section-title">
            <h2>Météorologie</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykweather.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Suivez en temps réél le temps qu'il fait dans des lieux du monde que vous choisissez.
                Cette application permet de :
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Se connecter à l'API Google Maps</h5>
                  pour obtenir les coordonnées géographiques d'un lieu d'après son nom
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Afficher le temps qu'il fait</h5> en se connectant à l'API de AccuWeather avec les cooordoonées
                  obtenues précédemment.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Utiliser l'espace de stockage de votre navigateur</h5>
                  pour enregistrer votre liste de lieux
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://weather.cyklang.net" class="btn-test" target="_blank">
                  Tester
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;Vidéo</span>
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- ======= End Weather case ======-->

      <!-- ======= Cas du Blog ======-->

      <section id="blogcase" class="about">
        <div class="container">

          <div class="section-title">
            <h2>Magazine en ligne</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykblog.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Publiez un magazine en ligne avec des articles illustrés écrits par différents rédacteurs
                et la possibilité pour un utilisateur connecté de commenter un article et de cocher un icône "J'aime".
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Réaliser un site web à partir d'un design</h5>
                  A partir d'une maquette de site fournie par un designer, nous réalisons une application cliente
                  avec le framework VueJS, connecté au serveur CYK par un API REST.
                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>Développer l'application interne avec CYK</h5>
                  Le langage CYK est utilisé pour l'application à usage interne pour rédiger et publier
                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>Implémenter un microservice avec CYK</h5>
                  Le langage CYK est utilisé pour programmer l'API REST utilisée par l'application grand public.
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://blog-public.cyklang.org" class="btn-test" target="_blank">
                  Tester
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; Vidéo</span>
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- End Cas du Blog -->

      <!-- ======= Compta Case Section =====-->

      <section id="comptacase" class="about">

        <div class="container">
          <div class="section-title">
            <h2>Gestion Comptable</h2>
          </div>

          <div class="row content">

            <div class="col-lg-6">
              <img src="../assets/img/cykcompta.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Gérez votre comptabilité en partie double avec CYK Comptabilité
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Saisie assistée par modèles de pièce pré-paramétré</h5>
                  Pour un utilisateur non comptable, les mouvements de débit / crédit sont générés à partir des
                  paramètres saisis.
                  Le justificatif numérisé peut être joint à la pièce comptable.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Recherche multi-critères de pièce ou d'écriture </h5>
                  Recherche par libellé partiel insensible à la casse (majuscule / minuscule) et aux accents, par compte
                  général ou auxiliaire,
                  par intervalle d'exercices comptables ou tous exercices, par intervalle de montant, ou par une
                  combinaison de ces critères.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Etats comptables et financiers</h5>
                  Balance, journaux détaillés, grand livre des comptes, impression des documents fiscaux CERFA,
                  paramétrage d'états financiers avec rubriques définis par fourchettes de comptes ou formules de
                  calcul, génération du FEC (fichier d'écritures comptables).

                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://compta.cyklang.net" class="btn-test" target="_blank">
                  Tester
                </a>

                <a href="https://youtu.be/0tlvbGN5_c8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; Vidéo</span>
                </a>

              </div>
            </div>
          </div>
        </div>

      </section>
      <!-- End Compta Case -->

    </section>
    <!-- End Case Study -->

    <!-- ======= CLI Section -->

    <section id="cli" class="about">

      <div class="container">
        <div class="section-title">
          <h2>Command Line Interface</h2>
        </div>

        <div class="row content">

          <div class="col-lg-6">
            <img src="../assets/img/cli.webp" class="img-fluid" alt="" data-aos="zoom-up">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              L'interface en ligne de commande vous permet de :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Transférer des fichiers vers et depuis le serveur</h5>
                Le transfert de fichiers du poste local vers le serveur CykLang se fait par http
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Exécuter des requêtes courantes sur la base de données</h5>
                Bien que la base de données Postgresql soit accessible par les clients usuels (psql ou pgadmin),
                le CLI fournit des raccourcis plus rapides pour les requêtes courantes
              </li>
            </ul>

          </div>
        </div>
      </div>

    </section>
    <!-- End CLI Section  -->

    <!-- ======= Schema Section -->

    <section id="schema" class="about">
      <div class="container">
        <div class="section-title">
          <h2>Developer Tools</h2>
        </div>

        <div class="row content">

          <div class="col-lg-6">
            <img src="../assets/img/cyklangxsd.webp" class="img-fluid" alt="" data-aos="zoom-up">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              La syntaxe de CykLang est décrite ici: https://www.cyklang.net/schema/cyklang.xsd
              Les éditeurs de texte moderne, tels que Visual Studio Code, comportent des extensions qui
              interprètent ce fichier schéma pour fournir des services telles que :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Colorisation syntaxique</h5>
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>L'aide contextuelle</h5>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>

    <!-- End Schema Section -->

  </main><!-- End #main -->

  <!-- End #main -->

  <FooterComponent />
</template>


<script setup lang="ts">

import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SignUpComponent from "../components/SignUpComponent.vue";
import SignInComponent from "../components/SignInComponent.vue";
import ForgotPassComponent from "../components/ForgotPassComponent.vue";
import { devMode, fetchServer } from '../utility'

import "/src/assets/vendor/aos/aos.css";
import "/src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "/src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "/src/assets/vendor/boxicons/css/boxicons.min.css";
import "/src/assets/vendor/glightbox/css/glightbox.min.css";
import "/src/assets/vendor/remixicon/remixicon.css";
import "../assets/css/style.css";

// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Glightbox from 'glightbox'

import AOS from "aos";
import { onMounted, ref } from "vue";

import { getLogger } from "loglevel";
const logger = getLogger("HomeView.vue");
logger.setLevel("debug");

import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
locale.value = 'fr'

import { useStore, getCurrentUser } from "../utility";

getCurrentUser()

onMounted(() => {

  Glightbox({
    selector: '.glightbox'
  })
});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  console.log('AOS.init !!!')
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});

const refSignUpComponent = ref()
const handleSignUp = () => {
  if (refSignUpComponent.value) {
    refSignUpComponent.value.signup()
  }
}

const refSignInComponent = ref()
const handleSignIn = () => {
  if (refSignInComponent.value) {
    refSignInComponent.value.signin()
  }
}

const handleSignOut = async () => {
  await fetchServer("/api/signout")
  window.location.reload()
}

const handleOpen = () => {
  const href = devMode('/cyk/#/run/accounting')
  const newtab = window.open(href, 'cyk-compta')
  if (newtab === null) {
    window.location.href = href
  }
  else {
    window.location.reload()
  }
}

const refForgotPassComponent = ref()
const handleForgotPass = async () => {
  if (refForgotPassComponent.value) {
    refForgotPassComponent.value.forgotpass()
  }
}

</script>

<style>
#casestudy .btn-watch-video {
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  margin: 10px 0 0 25px;
  line-height: 1;
}

#casestudy .btn-test {
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px 11px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px 0 0 0;
  color: #fff;
  background: #47b2e4;
}
</style>
