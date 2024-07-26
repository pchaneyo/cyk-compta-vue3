<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">CYK Compta</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="#hero">{{ $t('home') }}</a></li>
          <li><a class="nav-link scrollto" href="#why">{{ $t('why') }}</a></li>
          <li class="dropdown">
            <a class="nav-link" href=""><span>{{ $t('case_study') }}</span>
              <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a class="nav-link scrollto" href="#introduction">{{ $t('introduction') }}</a></li>
              <li><a class="nav-link scrollto" href="#cinemacase">{{ $t('cinema') }}</a></li>
              <li><a class="nav-link scrollto" href="#weathercase">{{ $t('weather') }}</a></li>
              <li><a class="nav-link scrollto" href="#blogcase">{{ $t('blog') }}</a></li>
              <li><a class="nav-link scrollto" href="#comptacase">{{ $t('accounting') }}</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#cli">CLI</a></li>
          <li><a class="nav-link scrollto" href="#schema">DevTools</a></li>
          <template v-if="! useStore().currentUser">
            <li><a class="nav-link scrollto getstarted" href="#" @click="handleSignUp">S'inscrire</a></li>
            <li><a class="nav-link scrollto" href="#" @click="handleSignIn">Se connecter</a></li>
            <li><a class="nav-link scrollto" href="#" @click="handleForgotPass">Mot de passe oublié</a></li>
          </template>
          <template v-else>
            <li><a class="nav-link scrollto" href="#" @click="handleSignOut">Déconnecter</a></li>
          </template>

          <li class="dropdown">
            <a class="nav-link" href=""> <span>{{ $t('language') }}</span><i class="bi bi-chevron-down"></i> </a>
            <ul>
              <li><a href="#/fr">Français</a></li>
              <li><a href="#/en">English</a></li>
              <li><a href="#/zh">中文</a></li>
            </ul>
          </li>


        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script setup lang="ts">
import "/src/assets/vendor/aos/aos.css";
import "/src/assets/vendor/bootstrap/css/bootstrap.min.css";
import "/src/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "/src/assets/vendor/boxicons/css/boxicons.min.css";
import "/src/assets/vendor/glightbox/css/glightbox.min.css";
import "/src/assets/vendor/remixicon/remixicon.css";
import "../assets/css/style.css";
// import "../assets/css/style.css";
// import "../assets/vendor/glightbox/css/glightbox.min.css";

import { getLogger } from "loglevel";
const logger = getLogger("HeaderComponent.vue");
logger.setLevel("debug");

import { onMounted } from "vue";
import { useStore } from "../utility";

onMounted(() => {

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = document.querySelectorAll('#navbar .scrollto')
  const navbarLinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!(navbarlink instanceof HTMLAnchorElement) || !navbarlink.hash) return
      const section = document.querySelector(navbarlink.hash) as HTMLElement
      if (!section) return
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active')
      }
      else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarLinksActive)
  window.addEventListener('scroll', navbarLinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */

  const selectHeader = document.querySelector('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    }
    window.addEventListener('load', headerScrolled)
    window.addEventListener('scroll', headerScrolled)
  }


  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (anchor: string) => {
    const header = document.querySelector("#header") as HTMLElement;
    const offset = header?.offsetHeight;

    const elementPos = (document.querySelector(anchor) as HTMLElement).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };



  /**
   * Mobile nav toggle
   */

  const mobileNavToogleButton = document.querySelector(".mobile-nav-toggle");

  if (mobileNavToogleButton) {
    mobileNavToogleButton.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  }

  function mobileNavToogle() {
    logger.debug('mobileNavToggle')
    // document.querySelector("body")?.classList.toggle("mobile-nav-active");
    document.querySelector('#navbar')?.classList.toggle("navbar-mobile")

    mobileNavToogleButton?.classList.toggle("bi-list");
    mobileNavToogleButton?.classList.toggle("bi-x");
  }

  /**
   * Toggle mobile nav dropdowns
   */

  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", (event) => {
      // if (document.querySelector(".mobile-nav-active")) {
      if (document.querySelector("#navbar")?.classList.contains("navbar-mobile")) {
        event.preventDefault();
        // el.classList.toggle("active");
        el.nextElementSibling?.classList.toggle("dropdown-active");

        // let dropDownIndicator = el.querySelector(".dropdown-indicator");
        // dropDownIndicator?.classList.toggle("bi-chevron-up");
        // dropDownIndicator?.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
  * Scrool with ofset on links with a class name .scrollto
  */

  document.querySelectorAll('.scrollto').forEach((el: Element) => {
    el.addEventListener("click", (event) => {
      if (el instanceof HTMLAnchorElement) {
        event.preventDefault()
        const navbar = document.querySelector('#navbar')
        if (navbar?.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          const navbarToggle = document.querySelector('.mobile-nav-toggle')
          navbarToggle?.classList.toggle('bi-list')
          navbarToggle?.classList.toggle('bi-x')
        }
        logger.debug('scrollto ' + el.hash)
        scrollto(el.hash)
      }
    })


    window.addEventListener('load', () => {

    })
  });


  (function () {
    "use strict";

  })();

  /**
   * Animation on scroll function and init
   */

  //  Aos.init();


});

const emits = defineEmits(['signup', 'signin', 'signout', 'forgotpass'])

const handleSignUp = () => {
  emits('signup')
}

const handleSignIn = () => {
  emits('signin')
}

const handleSignOut = () => {
  emits('signout')
}

const handleForgotPass = () => {
  emits('forgotpass')
}

</script>
