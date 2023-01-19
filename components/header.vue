<template>
  <header>
    <b-row>
      <b-col
        class="
          header-container
          bg-white
          shadow
          d-flex
          align-items-start align-items-sm-center
          p-2
        "
        :class="{ 'header-container-mobile': breakpoint.xs }"
      >
        <nuxt-link to="/">
          <div
            class="logo-container"
            :class="{ 'logo-container-mobile': breakpoint.xs }"
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
    }),
  },

  methods: {
    ...mapActions({
      changeScrollY: "layout/changeScrollY",
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
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  transition: height 0.3s;
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
  transition: height 0.3s, width 0.3s;
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