<template>
  <HeaderComponent />

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up"
          data-aos-delay="200">
          <h1>A Full Stack Language for the Web</h1>
          <h2>For Whole Application / Front End / Back End / Microservices

          </h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="../docs/guide/getting-started.html" class="btn-get-started">Get Started</a>
            <a href="https://youtu.be/0tlvbGN5_c8" class="glightbox btn-watch-video"><i
                class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="../assets/img/LogoCYKLangDark.svg" class="img-fluid animated" alt="" />
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
          <h2>Why CykLang</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Discover CykLang, the revolutionary tool that merges the development speed of a traditional Content
              Management System (CMS) with the flexibility of a Headless CMS, thus offering an unprecedented experience.
              With CykLang, building your application is simplified through an integrated XML language, allowing you to
              customize every aspect of your front end. Get the best of both worlds with CykLang: unparalleled speed and
              customization
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Containers: Docker / Kubernetes</h5>
                Deploy with Docker or Kubernetes. The entire application is contained within 2 containers: one container
                for the CYK runtime and another container for the Postgresql database (tables in a standard format
                directly usable independently of the software)..
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Visual Studio Code</h5>
                Develop in a modern development environment equipped with numerous productivity tools: syntax
                highlighting, auto-completion assistance...
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Command line tools</h5>
                The CYK command and its sub-commands, which can be integrated into your productivity scripts, allow you to
                administer your CYK application and servers.
              </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Compared to the use of a traditional universal programming language like PHP or JavaScript/TypeScript, the
              integrated XML language offers the following advantages:
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Quick Prototyping </h5>
                The integrated XML language takes care of creating tables and interfacing between the client-side and
                server-side. There's no longer a need to specify an API, which saves valuable programming time.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Internationalization of the application</h5>
                The translation of messages can be done afterwards without adding complexity to the application code,
                using separate language files.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Better security</h5>
                The language is limited in its functionalities and is easier to secure than a universal language.
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Saves a layer of software.</h5>
                The Client/Server interface becomes transparent. If CykLang is used for the Front end, the distribution of
                processing between the browser and server is automatic and seamless. However, the programmer can also
                specify functions that must be processed on the server for optimization purposes.
              </li>
              <a href="../docs/guide/" class="btn-learn-more mt-5">Know more</a>
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
            <h2>Examples</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykexamples_en.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>

              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#cinemacase">
                    <h5>Cinema: actors and films</h5>
                  </a>
                  Complete Application. A film database with management of actor and film images.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#weathercase">
                    <h5>Weather</h5>
                  </a>
                  Front End and Microservices. Display real-time weather in multiple locations around the world.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#blogcase">
                    <h5>Blog</h5>
                  </a>
                  Back End. Publish an illustrated magazine online.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#comptacase">
                    <h5>Accounting Management</h5>
                  </a>
                  Complete Application. Double-entry accounting with source code organized into modules and dynamically
                  constructed forms.
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
            <h2>Cinema : Actors and Films</h2>
          </div>
          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykcinema.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Enter your favorite actors and films into this cinematic database.
              </p>
              <p>We will learn to :</p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Creating tables </h5> and their relationships
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Entering data into tables</h5> using a CRUD program generated by the CYK client
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Manipulating images</h5> by cropping, rotating, and zooming.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Using the CYK command </h5> to manage access rights and users.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Writing CYK language instructions </h5>
                  to customize the side menu, add a list in a form, and modify
                  the SQL of a query
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;Video</span>
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
            <h2>Weather</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykweather.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Track real-time weather in locations around the world that you choose."

                You will be able to :
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Connect to the Google Maps API</h5>
                  To obtain the geographical coordinates of a location based on its name
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Display the current weather </h5>
                  by connecting to the AccuWeather API with the previously obtained
                  coordinates
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Utilize your browser's storage space</h5>
                  to save your list of locations
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://weather.cyklang.net" class="btn-test" target="_blank">
                  To Test
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;Video</span>
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
            <h2>Blog</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykblog.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Publish an online magazine with illustrated articles written by different writers, allowing logged-in
                users to comment on an article and check a "Like" icon. </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Creating a website based on a design</h5>
                  From a website mockup provided by a designer, we develop a client-side application using the VueJS
                  framework, connected to the CYK server through a REST API.
                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>Developing the internal application with CYK</h5>
                  The CYK language is used for the internal application for writing and publishing
                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>Implementing a microservice with CYK</h5>
                  The CYK language is used to program the REST API used by the public-facing application
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://blog-public.cyklang.org" class="btn-test" target="_blank">
                  To Test
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; Video</span>
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
            <h2>Accounting Management</h2>
          </div>

          <div class="row content">

            <div class="col-lg-6">
              <img src="../assets/img/cykcompta.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Manage your double-entry accounting with CYK
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>Organizing the code into modules</h5>
                  Create your source files by grouping functions according to your preference.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Dynamically construct an input form</h5>
                  The entry of parameters for an accounting entry is done through a form constructed based on information
                  provided by the user.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>Generate accounting entries</h5>
                  A document template includes accounting entries, each field such as account, description, debit, and
                  credit is specified by a calculation formula
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://compta.cyklang.net" class="btn-test" target="_blank">
                  To Test
                </a>

                <a href="https://youtu.be/0tlvbGN5_c8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; Video</span>
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
              With CLI you will be able to :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Transfer files to and from the server</h5>
                The file transfer from the local machine to the CykLang server is done via HTTP
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Execute common queries on the database.</h5>
                Although the PostgreSQL database is accessible by usual clients (psql or pgadmin), the CLI provides
                quicker shortcuts for common queries
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
              The syntax of CykLang is described here: https://www.cyklang.net/schema/cyklang.xsd. Modern text editors,
              such as Visual Studio Code, have extensions that interpret this schema file to provide services.
              :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Syntax highlighting</h5>
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Contextual help</h5>
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
import { onMounted } from "vue";

import { getLogger } from "loglevel";
const logger = getLogger("HomeView.vue");
logger.setLevel("debug");

import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
locale.value = 'en'

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
