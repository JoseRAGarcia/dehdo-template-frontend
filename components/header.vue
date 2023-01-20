<template>
  <header>
    <b-row>
      <b-col
        class="
          header-container
          d-flex
          align-items-start align-items-sm-center
          p-2
        "
        :class="{ 'header-container-mobile': breakpoint.xs, 'shadow': scrollY > 20 }"
        :style="scrollY < 20 ? 'background: rgba(var(--dd-primary-rgb), 0.2);' : 'background: #fff;'"
      >
        <nuxt-link to="/">
          <div 
            class="logo-container"
            :class="{ 'logo-container-mobile': breakpoint.xs && scrollY > 20 }"
          >
            <img src="/img/dehdo-logo.png" alt="Logotipo do site" />
          </div>
        </nuxt-link>
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
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  transition: height 0.8s, background 0.8s;
}
.header-container-mobile {
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
.logo-container-mobile {
  height: 50%;
  width: 100px;
}
.logo-container img {
  max-height: 90%;
  max-width: 90%;
}
</style>