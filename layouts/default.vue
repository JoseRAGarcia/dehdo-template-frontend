<template>
  <b-container fluid>
    <Splash :loaded="loaded" v-if="!layoutReady" />
    <Header v-show="loaded" />
    <Nuxt v-show="loaded" />
    <Footer v-show="loaded" />
  </b-container>
</template>

<script>
import setLayoutService from "~/services/setLayoutService";
import { mapActions } from "vuex";

export default {
  async beforeMount() {
    await setLayoutService();

    this.changeWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      this.changeWindowWidth(window.innerWidth);
    });

    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.layoutReady = true;
      }, 1000);
    }, 3000);
  },

  data() {
    return {
      layoutReady: false,
      loaded: false,
    };
  },

  methods: {
    ...mapActions({
      changeWindowWidth: "window/changeWindowWidth",
    }),
  },
};
</script>