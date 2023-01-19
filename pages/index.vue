<template>
  <section>
    <b-row>
      <b-col
        :style="`padding: ${
          breakpoint.xs ? '70' : '100'
        }px 0 0 0; transition: padding 0.3s;`"
      >
        <div class="banner-container">
          <img
          :style="scrollY > 300 && `filter: blur(4px);`"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg"
            alt=""
          />
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

  computed: {
    ...mapGetters({
      breakpoint: "window/getBreakpoint",
      scrollY: "layout/getScrollY"
    }),
  },
};
</script>

<style scoped>
.banner-container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.banner-container img {
  position: fixed;
  height: 100%;
  width: 110%;
  margin: -5px -10px;
  object-fit: cover;
}
</style>

