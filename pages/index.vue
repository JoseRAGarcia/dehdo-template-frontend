<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <div class="banner-container">
          <img
            class="banner-img"
            :class="{ 'banner-img-fade': bannerFade }"
            :style="scrollY > 300 && `filter: blur(4px);`"
            :src="banners[bannerIndex].banner"
            alt=""
          />
          <div
            class="banner-controls prev-banner"
            :class="{ 'disabled-controls': bannerFade }"
            @click="prevBanner"
          >
            <i class="bx bx-md bx-chevron-left"></i>
          </div>
          <div
            class="banner-controls next-banner"
            :class="{ 'disabled-controls': bannerFade }"
            @click="nextBanner"
          >
            <i class="bx bx-md bx-chevron-right"></i>
          </div>
          <div class="banner-controls banner-dots">
            <span
              class="mx-1"
              :class="{ 'disabled-controls': bannerFade }"
              v-for="(dot, index) in banners.length"
              :key="index"
              @click="setBannerIndex(index)"
            >
              <i
                class="bx bx-xs bxs-circle"
                :style="
                  bannerIndex === index &&
                  'opacity: 1; color: var(--dd-primary)'
                "
              ></i>
            </span>
          </div>
        </div>
        <!-- <b-carousel
        class="banner-container"
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          indicators
          img-width="100%"
          img-height="100vh"
        >
          <b-carousel-slide
            caption="First Slide"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Fourth Slide"
            img-src="https://picsum.photos/1024/480/?image=23"
          ></b-carousel-slide>
        </b-carousel> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2 bg-white">
        <div class="dd-card">
          <p v-for="(item, index) in 20" :key="index">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            maiores debitis quaerat voluptate nostrum quasi cum facilis nihil
            excepturi commodi ipsa non beatae explicabo. Quidem voluptas impedit
            laudantium. Consectetur, maxime.
          </p>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",

  created() {
    this.resumeBanner();
  },

  beforeDestroy() {
    this.pauseBanner();
  },

  data() {
    return {
      bannerInterval: null,
      bannerFade: false,
      bannerIndex: 0,
      banners: [
        {
          idBanner: 1,
          banner:
            "https://upload.wikimedia.org/wikipedia/commons/9/96/Dai_Stanton%27s_home_studio_2009-03-07.jpg",
        },
        {
          idBanner: 2,
          banner:
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        },
        {
          idBanner: 3,
          banner:
            "https://upload.wikimedia.org/wikipedia/commons/1/11/Interpreting_Ecommerce_Website_Analytics.jpg",
        },
        {
          idBanner: 4,
          banner:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/74_South_Shore_Mall_Cigarettes%2C_Bay_Shore_NY_1979.jpg",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      breakpoint: "window/getBreakpoint",
      scrollY: "window/getScrollY",
    }),
  },

  methods: {
    autoChangeBanner() {
      this.bannerFade = true;
      setTimeout(() => {
        if (this.bannerIndex < this.banners.length - 1) {
          this.bannerIndex++;
        } else {
          this.bannerIndex = 0;
        }
        this.bannerFade = false;
      }, 300);
    },

    prevBanner() {
      this.pauseBanner();
      this.bannerFade = true;
      setTimeout(() => {
        if (this.bannerIndex) {
          this.bannerIndex--;
        } else {
          this.bannerIndex = this.banners.length - 1;
        }
        this.bannerFade = false;
        this.resumeBanner();
      }, 300);
    },

    nextBanner() {
      this.pauseBanner();
      this.bannerFade = true;
      setTimeout(() => {
        if (this.bannerIndex < this.banners.length - 1) {
          this.bannerIndex++;
        } else {
          this.bannerIndex = 0;
        }
        this.bannerFade = false;
        this.resumeBanner();
      }, 300);
    },

    setBannerIndex(index) {
      this.pauseBanner();
      this.bannerFade = true;
      setTimeout(() => {
        this.bannerIndex = index;
        this.bannerFade = false;
        this.resumeBanner();
      }, 300);
    },

    pauseBanner() {
      clearInterval(this.bannerInterval);
      this.bannerInterval = null;
    },

    resumeBanner() {
      if (!this.bannerInterval) {
        setTimeout(() => {
          this.bannerInterval = setInterval(this.autoChangeBanner, 5000);
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.banner-container {
  position: relative;
  background: #000;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-img {
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.banner-img-fade {
  opacity: 0.2;
}
.banner-controls {
  position: absolute;
  cursor: pointer;
}
.banner-controls i {
  color: #ccc;
  opacity: 0.5;
  transition: color 0.3s, opacity 0.3s;
}
.banner-controls i:hover {
  color: var(--dd-primary);
  opacity: 1;
}
.banner-controls:not(.banner-dots) i {
  font-size: 3.5rem !important;
}
.prev-banner {
  left: 0;
}
.next-banner {
  right: 0;
}
.banner-dots {
  bottom: 0;
}
.disabled-controls {
  pointer-events: none !important;
}
</style>

