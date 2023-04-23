<template>
  <div class="carousel-container" :style="`width: ${width}; height: ${height};`">
    <div
      class="carousel-img-container"
      :style="imgContainerStyle"
      v-for="(img, index) in imgs"
      :key="index"
      @mouseover="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <Transition :name="transitionEffect">
        <img
          loading="lazy"
          v-if="carouselIndex === index"
          class="carousel-img"          
          :src="img"
          :style="imgStyle"
          alt=""
        />
      </Transition>
    </div>

    <div v-show="imgs.length > 1 && arrows" class="img-controls prev-img" @click="prevImg">
      <i class="bx bx-md bx-chevron-left"></i>
    </div>
    <div v-show="imgs.length > 1 && arrows" class="img-controls next-img" @click="nextImg">
      <i class="bx bx-md bx-chevron-right"></i>
    </div>
    <div v-show="imgs.length > 1 && dots" class="img-controls img-dots">
      <span
        class="mx-1"
        v-for="(dot, index) in imgs.length"
        :key="index"
        @click="setcarouselIndex(index)"
      >
        <i
          class="bx bx-xs bxs-circle"
          :style="
            carouselIndex === index && 'opacity: 1; color: var(--dd-primary)'
          "
        ></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
    speed: {
      type: Number,
      default: 3000,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '500px',
    },
    arrows: {
      type: Boolean,
      default: true,
    },
    dots: {
      type: Boolean,
      default: true,
    },
    carouselStyle: {
      type: String,
      default: '',
    },
    imgContainerStyle: {
      type: String,
      default: '',
    },
    imgStyle: {
      type: String,
      default: '',
    },
    transitionEffect: {
      type: String,
      default: 'slide-left',
    },
    pauseOnHover: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.resumeCarousel();
  },

  beforeMount() {
    this.pauseCarousel();
  },

  data() {
    return {
      carouselInterval: null,
      carouselFade: false,
      carouselIndex: 0,
    };
  },

  watch: {
    speed: function () {
        this.resumeCarousel()
    },
  },  

  methods: {
    autoChangeImg() {
      if (this.carouselIndex < this.imgs.length - 1) {
        this.carouselIndex++;
      } else {
        this.carouselIndex = 0;
      }
    },

    prevImg() {
      if (this.carouselIndex) {
        this.carouselIndex--;
      } else {
        this.carouselIndex = this.imgs.length - 1;
      }
      this.resumeCarousel();
    },

    nextImg() {
      if (this.carouselIndex < this.imgs.length - 1) {
        this.carouselIndex++;
      } else {
        this.carouselIndex = 0;
      }
      this.resumeCarousel();
    },

    setcarouselIndex(index) {
      this.carouselIndex = index;
      this.resumeCarousel();
    },

    pauseCarousel() {
      if(!this.pauseOnHover) return
      
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    },

    resumeCarousel() {
      if(!this.pauseOnHover) return
      
      this.pauseCarousel();
      setTimeout(() => {
        if (!this.carouselInterval) {
          this.carouselInterval = setInterval(this.autoChangeImg, this.speed);
        }
      });
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  background: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-img-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
.carousel-img {
  max-height: 100%;
  max-width: 100%;  
}
.img-controls {
  position: absolute;
  cursor: pointer;
}
.img-controls i {
  color: #ccc;
  opacity: 0.5;
  transition: color 0.3s, opacity 0.3s;
}
.img-controls i:hover {
  color: var(--dd-primary);
  opacity: 1;
}
.img-controls:not(.img-dots) i {
  font-size: 3.5rem !important;
}
.prev-img {
  left: 0;
}
.next-img {
  right: 0;
}
.img-dots {
  bottom: 15px;
}
.disabled-controls {
  pointer-events: none !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 1s ease-in-out;
}
.slide-left-enter,
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 1s ease-in-out;
}
.slide-right-enter,
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 1s ease-in-out;
}
.slide-top-enter,
.slide-top-enter-from {
  transform: translateY(100%);
}
.slide-top-leave-to {
  transform: translateY(-100%);
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: transform 1s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-enter-from {
  transform: translateY(-100%);
}
.slide-bottom-leave-to {
  transform: translateY(100%);
}
</style>