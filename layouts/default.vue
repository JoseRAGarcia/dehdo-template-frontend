<template>
  <b-container fluid>
    <Splash v-if="!layoutReady" />
    <Header v-show="layoutReady" />
    <Nuxt v-show="layoutReady" />
    <Footer v-show="layoutReady" />
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
      this.layoutReady = true;
    }, 3000);
  },

  data() {
    return {
      layoutReady: false,
    };
  },

  methods: {
    ...mapActions({
      changeWindowWidth: "window/changeWindowWidth",
    }),
  },
};
</script>