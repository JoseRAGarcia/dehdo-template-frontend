<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <DdCarousel
          :imgs="banners"
          :speed="5000"
          height="100vh"
          width="100%"
          imgContainerStyle="position: fixed;"
          :imgStyle="
            scrollY > 300
              ? `filter: blur(4px); height: 100%; width: 100%; object-fit: cover;`
              : 'height: 100%; width: 100%; object-fit: cover;'
          "
        />
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

  data() {
    return {
      banners: [
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Dai_Stanton%27s_home_studio_2009-03-07.jpg",

        "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",

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
</style>

