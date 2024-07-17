<template>
  <HeaderComponent />

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up"
          data-aos-delay="200">
          <h1>全栈网络语言</h1>
          <h2>完整应用程序 / 前端 / 后端 / 微服务 
          </h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="../docs/zh/guide/getting-started.html" class="btn-get-started">开始</a>
            <a href="https://youtu.be/0tlvbGN5_c8" class="glightbox btn-watch-video"><i
                class="bi bi-play-circle"></i><span>看视频</span></a>
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
          <h2>为什么用 CykLang</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              发现CykLang, 这个革命性的工具将传统内容管理系统 (CMS) 
              的开发速度与Headless CMS的灵活性融为一体, 
              从而提供了前所未有的体验.
              使用 CykLang，通过集成的 XML 语言简化了应用程序的构建过程，
              使您能够定制前端的每个方面。通过 CykLang，获得两全其美：无与伦比的速度和定制化。
       
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>Containers: Docker / Kubernetes</h5>
                使用 Docker 或 Kubernetes 部署。整个应用程序包含在两个容器中：
                一个容器用于 CYK 运行时，另一个容器用于 PostgreSQL 数据库
                （表以标准格式直接可独立使用，与软件无关）。
        
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>Visual Studio Code</h5>
                在现代开发环境中开发，配备了许多提高生产力的工具：语法高亮、自动补全辅助等。
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>命令行工具</h5>
                CYK命令及其子命令可集成到您的生产力脚本中，让您管理CYK应用程序和服务器。
              </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              与传统的通用编程语言如PHP或JavaScript/TypeScript相比，集成的XML语言提供了以下优势：:
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>快速原型设计 </h5>
                集成的 XML 语言负责创建表格并在客户端和服务器端之间进行接口。
                不再需要指定 API，这节省了宝贵的编程时间。              
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>应用程序的国际化</h5>
                消息的翻译可以在后期完成，而不会给应用程序代码增加复杂性，使用单独的语言文件。
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>更好的安全性</h5>
                该语言在功能上受到限制，比通用语言更容易保护安全。              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>节省了一层软件.</h5>
                客户端/服务器接口变得透明。如果CykLang用于前端，浏览器和服务器之间的处理分配是自动且无缝的。
                然而，程序员也可以指定出于优化目的必须在服务器上处理的函数。              </li>
              <a href="../docs/zh/guide/" class="btn-learn-more mt-5">了解更多</a>
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
            <h2>例子</h2>
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
                    <h5>电影：演员和电影</h5>
                  </a>
                  完整的应用程序。一个包含演员和电影图片管理的电影数据库                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#weathercase">
                    <h5>天气</h5>
                  </a>
                  前端和微服务。在世界各地的多个位置显示实时天气                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#blogcase">
                    <h5>博客</h5>
                  </a>
                  后端。在线发布一本图文并茂的杂志。                </li>
                <li><i class="ri-check-double-line"></i>
                  <a class="nav-link scrollto" href="#comptacase">
                    <h5>会计管理</h5>
                  </a>
                  完整的应用程序。双重记账会计，源代码组织成模块，并动态构建表单
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
            <h2>电影：演员和电影</h2>
          </div>
          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykcinema.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                将您喜爱的演员和电影输入到这个电影数据库中              </p>
              <p>我们会学习 :</p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>创建表格 </h5>及其关系 
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>输入数据到表格中 </h5> 使用CYK客户端生成的CRUD程序
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>处理图像</h5> 裁剪, 旋转, 缩放.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>使用CYK命令 </h5>管理访问权限和用户.
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>编写CYK语言指令 </h5>
                  自定义侧边菜单，添加表单中的列表，并修改查询的SQL
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;视频</span>
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
            <h2>天气</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykweather.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                跟踪您选择的世界各地位置的实时天气。

                我们会学习 :
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>连接到谷歌地图API </h5>
                  据地名获取地理坐标
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>显示当前天气 </h5>
                  通过与先前获取的坐标连接到AccuWeather API 
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>利用浏览器的存储空间 </h5>
                  保存您的位置列表 
                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://weather.cyklang.net" class="btn-test" target="_blank">
                  测试
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp;视频</span>
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
            <h2>博客</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <img src="../assets/img/cykblog.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                发布一本在线杂志，由不同的作者撰写图文并茂的文章，允许已登录的用户对文章发表评论并查看“喜欢”图标。 
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>根据设计创建网站</h5>
                  由设计师提供的网站模型，我们使用 VueJS 框架开发客户端应用程序，并通过 REST API 连接到 CYK 服务器。
                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>使用 CYK 开发内部应用程序</h5>
                  CYK语言被用于内部应用程序的写作和发布                </li>

                <li><i class="ri-check-double-line"></i>
                  <h5>使用 CYK 实现微服务</h5>
                  CYK语言被用于编写公共界面应用程序使用的REST API                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://blog-public.cyklang.org" class="btn-test" target="_blank">
                  测试
                </a>

                <a href="https://youtu.be/vbRuqVyc1d8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; 视频</span>
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
            <h2>会计管理</h2>
          </div>

          <div class="row content">

            <div class="col-lg-6">
              <img src="../assets/img/cykcompta.webp" class="img-fluid" alt="" data-aos="zoom-up">
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                使用CYK管理你的复式记账
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  <h5>将代码组织成模块</h5>
                  根据您的偏好将函数分组创建源文件                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>动态构建输入表单</h5>
                  通过根据用户提供的信息构建的表单来输入会计分录的参数
                </li>
                <li><i class="ri-check-double-line"></i>
                  <h5>生成会计分录</h5>
                  文档模板包括会计分录，每个字段如账户、描述、借方和贷方由计算公式指定                </li>
              </ul>

              <div class="d-flex justify-content-center justify-content-lg-start">

                <a href="https://compta.cyklang.net" class="btn-test" target="_blank">
                  测试
                </a>

                <a href="https://youtu.be/0tlvbGN5_c8" class="glightbox btn-watch-video" target="_blank">
                  <i class="bi bi-play-circle"></i>
                  <span> &nbsp; 视频</span>
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
          <h2>命令行界面</h2>
        </div>

        <div class="row content">

          <div class="col-lg-6">
            <img src="../assets/img/cli.webp" class="img-fluid" alt="" data-aos="zoom-up">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              使用CLI，您将能够 :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>在服务器和客户端之间传输文件</h5>
                从本地计算机到 CykLang 服务器的文件传输是通过 HTTP 完成的              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>在数据库上执行常见查询</h5>
                虽然常规客户端（psql或pgadmin）可以访问PostgreSQL数据库，但CLI为常见查询提供了更快的快捷方式              </li>
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
          <h2>开发工具</h2>
        </div>

        <div class="row content">

          <div class="col-lg-6">
            <img src="../assets/img/cyklangxsd.webp" class="img-fluid" alt="" data-aos="zoom-up">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              CykLang的语法描述在这里：https://www.cyklang.net/schema/cyklang.xsd。现代文本编辑器，如Visual Studio Code，具有解释此模式文件以提供服务的扩展              :
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i>
                <h5>语法高亮</h5>
              </li>
              <li><i class="ri-check-double-line"></i>
                <h5>上下文帮助</h5>
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
locale.value = 'zh'

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
