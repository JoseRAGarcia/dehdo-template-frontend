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

        <div class="main-menu d-none d-lg-flex" :class="scrollY < 20 && $route.path === '/' ? 'text-dd-shadow' : 'main-menu-solid'">
          <nuxt-link to="/#quem-somos">
            <span>Quem somos</span>
          </nuxt-link>
          <nuxt-link to="#">
            <span>Menu Item</span>
          </nuxt-link>
          <nuxt-link to="#/#">
            <span>Menu Item</span>
          </nuxt-link>
          <nuxt-link to="#/#/#">
            <span>Menu Item</span>
          </nuxt-link>
          <nuxt-link to="#/#/#/#">
            <span>Menu Item</span>
          </nuxt-link>
        </div>
        <div class="main-menu-mobile d-flex d-lg-none">
          <i class="bx bx-sm bx-menu" :class="scrollY < 20 && $route.path === '/' ? 'text-dd-shadow' : 'main-menu-solid'"></i>
        </div>
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

.main-menu,
.main-menu-solid,
.main-menu-mobile {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.main-menu a {
  height: 100%;
  padding: 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  transition: all 0.5s;
}

.main-menu a:not(.nuxt-link-active):hover {
  color: var(--dd-primary-lighten);
}
.main-menu .nuxt-link-active {
  color: var(--dd-primary);
}

.main-menu-solid a {
  height: 100%;
  padding: 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: var(--dd-primary);
  transition: all 0.5s;
}
.main-menu-solid a:not(.nuxt-link-active):hover {
  color: #fff;
  background: var(--dd-primary);
  padding: 0 15px 20px;
}
.main-menu-solid .nuxt-link-active {
  background: #fff;
  background: var(--dd-light);
}

.main-menu-mobile i {
  cursor: pointer;
  transition: all 0.5s;
}

.main-menu-mobile i:not(.main-menu-solid) {
  color: #fff;
}

.main-menu-mobile i:hover {
  color: var(--dd-primary);
}
</style>