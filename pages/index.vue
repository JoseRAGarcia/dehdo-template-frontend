<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <div class="banner-container">
          <DdCarousel
            :imgs="banners"
            :speed="10000"
            :pauseOnHover="false"
            transitionEffect="fade"
            height="100vh"
            width="100%"
            imgContainerStyle="position: fixed;"
            :imgStyle="
              scrollY > 300
                ? `filter: blur(4px); height: 100%; width: 100%; object-fit: cover;`
                : 'height: 100%; width: 100%; object-fit: cover;'
            "
          />
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="bg-white">
        <b-row>
          <b-col class="d-none d-lg-flex bg-dd-light mt-4">
            <div class="content-img-container p-2">
              <img
                loading="lazy"
                src="https://freesvg.org/img/Noun-project-1063.png"
                alt=""
              />
            </div>
          </b-col>
          <b-col class="col-12 col-lg-8">
            <div class="content-text-box p-2 my-4" id="quem-somos">
              <h2 class="content-title">Quem somos</h2>
              <p v-for="(p, index) in 4" :key="index">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam nostrum minima assumenda molestias
                voluptatibus. Asperiores hic assumenda rem modi ex officiis non
                cum quas, in animi nam reiciendis dicta!
              </p>
              <img
                class="content-text-box-bg d-flex d-lg-none"
                src="https://freesvg.org/img/Noun-project-1063.png"
                alt=""
              />
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="col-12 col-lg-8">
            <div class="content-text-box p-2 my-4" id="quem-somos">
              <h2 class="content-title">
                Seu <strong>Ecommerce</strong>, seu <strong>Blog</strong>, seus
                <strong>Serviços</strong> e muito mais em um só lugar!
              </h2>
              <p v-for="(p, index) in 4" :key="index">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam nostrum minima assumenda molestias
                voluptatibus. Asperiores hic assumenda rem modi ex officiis non
                cum quas, in animi nam reiciendis dicta!
              </p>
              <img
                class="content-text-box-bg d-flex d-lg-none"
                src="https://freesvg.org/img/gahag-0116832233.png"
                alt=""
              />
            </div>
          </b-col>
          <b-col class="d-none d-lg-flex bg-dd-light">
            <div class="content-img-container p-2">
              <img
                loading="lazy"
                src="https://freesvg.org/img/gahag-0116832233.png"
                alt=""
              />
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="p-0 my-4">
            <div class="blog-banner-container border shadow">
              <img
                class="blog-banner"
                loading="lazy"
                src="/img/home/puzzle.jpg"
                alt=""
              />
              <h2 class="blog-title text-dd-shadow text-dd-primary p-2 rounded">
                Seu site altamente personalizável e de fácil manutenção!
              </h2>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",

  data() {
    return {
      banners: [
        "/img/home/night-cartoon.jpg",
        "/img/home/night.jpg",
        "/img/home/studio.jpg",
        "/img/home/cigarettes.jpg",
        "/img/home/dashboard.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/9/96/Dai_Stanton%27s_home_studio_2009-03-07.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/1/11/Interpreting_Ecommerce_Website_Analytics.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/8/82/74_South_Shore_Mall_Cigarettes%2C_Bay_Shore_NY_1979.jpg",
      ],
    };
  },

  computed: {
    ...mapGetters({
      scrollY: "window/getScrollY",
    }),
  },

  methods: {},
};
</script>

<style scoped>
/* .banner-container::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(var(--dd-primary-rgb), .6);
} */

.content-img-container {
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-img-container img {
  max-height: 100%;
  max-width: 100%;
}

.content-text-box {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.content-text-box-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 50%;
  max-width: 50%;
  filter: opacity(0.07);
}

.blog-banner-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(0);
  transition: filter 0.5s;
}

.blog-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  position: absolute;
  text-align: center;
  z-index: 1;
}

@media only screen and (max-width: 1200px) {
  .content-text-box {
    height: auto;
  }
}
</style>

