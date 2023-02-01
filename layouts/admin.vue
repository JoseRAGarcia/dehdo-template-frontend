<template>
  <b-container fluid>
    <AdminHeader />
    <AdminMainMenu>
      <Nuxt />
    </AdminMainMenu>
    <Footer />
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
  },

  methods: {
    ...mapActions({
      changeWindowWidth: "window/changeWindowWidth",
      changeShowMenuMobile: "layout/changeShowMenuMobile",
    }),
  },
};
</script>