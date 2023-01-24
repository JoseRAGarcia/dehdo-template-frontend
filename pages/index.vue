<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <div class="banner-container">
          <DdCarousel
            :imgs="banners"
            :speed="10000"
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
          <b-col class="d-none d-md-flex bg-dd-light my-4">
            <div class="content-img-container p-2">
              <img
                src="https://freesvg.org/img/Noun-project-1063.png"
                alt=""
              />
            </div>
          </b-col>
          <b-col class="col-12 col-md-8">
            <div class="content-text-box p-2 my-4">
              <h2 class="content-title">Quem somos</h2>
              <p v-for="p, index in 10" :key="index">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aperiam nostrum minima assumenda molestias
                voluptatibus. Asperiores hic assumenda rem modi ex officiis non
                cum quas, in animi nam reiciendis dicta!
              </p>
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
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Dai_Stanton%27s_home_studio_2009-03-07.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Interpreting_Ecommerce_Website_Analytics.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/82/74_South_Shore_Mall_Cigarettes%2C_Bay_Shore_NY_1979.jpg",
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
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, .5),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
} */

.content-img-container {
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-img-container img {
  max-height: 100%;
  max-width: 100%;
}

.content-text-box {
  height: 500px;
  overflow: hidden;
}
</style>

