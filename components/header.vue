<template>
  <header>
    <b-row>
      <b-col
        class="header-container"
        :class="
          scrollY > 20
            ? 'header-container-solid shadow'
            : 'align-items-sm-center'
        "
        :style="
          scrollY < 20 && $route.path === '/'
            ? 'background: rgba(255, 255, 255, 0);'
            : 'background: #fff;'
        "
      >
        <nuxt-link to="/">
          <div
            class="logo-container mt-2"
            :class="scrollY > 20 ? 'logo-container-solid' : 'text-dd-shadow'"
          >
            <img src="/img/dehdo-logo.png" alt="Logotipo do site" />
          </div>
        </nuxt-link>

        <MainMenu />
      </b-col>
    </b-row>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
  },

  computed: {
    ...mapGetters({
      breakpoint: "window/getBreakpoint",
      scrollY: "window/getScrollY",
    }),
  },

  methods: {
    ...mapActions({
      changeScrollY: "window/changeScrollY",
    }),

    onScroll() {
      this.changeScrollY(window.scrollY);
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 100px;
  overflow: hidden;
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  transition: height 0.8s, background 0.8s;
}
.header-container-solid {
  height: 70px;
}

.logo-container {
  height: 100%;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 0.8s, width 0.8s;
}
.logo-container-solid {
  height: 50%;
  width: 100px;
}
.logo-container img {
  max-height: 90%;
  max-width: 90%;
}
</style>