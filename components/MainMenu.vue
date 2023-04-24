<template>
  <div class="h-100 w-100">
    <div
      class="main-menu d-none d-lg-flex text-nowrap"
      :class="
        scrollY < 20 && $route.path === '/'
          ? 'text-dd-shadow'
          : 'main-menu-solid'
      "
    >
      <nuxt-link v-if="$route.path === '/'" to="/#quem-somos">
        <span>Quem somos</span>
      </nuxt-link>
      <nuxt-link v-else to="/">
        <span>Home</span>
      </nuxt-link>
      <nuxt-link v-for="item in menu" :key="item.id" :to="item.link">
        {{ item.label }}
      </nuxt-link>
    </div>
    <div class="main-menu-mobile d-flex d-lg-none">
      <i
        class="bx bx-sm bx-menu"
        :class="
          scrollY < 20 && $route.path === '/'
            ? 'text-dd-shadow'
            : 'main-menu-solid'
        "
        @click="changeShowMenuMobile(true)"
      ></i>
      <div
        class="main-menu-mobile-mask"
        v-show="showMenuMobile"
        @click="changeShowMenuMobile(false)"
      ></div>
      <div
        class="main-menu-mobile-collapse"
        :style="showMenuMobile && 'right: 0;'"
      >
        <div
          class="
            main-menu-mobile-collapse-header
            bg-dd-primary
            d-flex
            align-items-center
            justify-content-start
          "
          style="height: 70px; border-bottom: 1px solid #ccc"
        >
          <i
            class="bx bx-md bx-chevron-right"
            @click="changeShowMenuMobile(false)"
          ></i>
        </div>
        <nuxt-link
          v-if="$route.path === '/'"
          :to="{ path: '/', hash: '#quem-somos' }"
        >
          <span>Quem somos</span>
        </nuxt-link>
        <nuxt-link v-else to="/">
          <span>Home</span>
        </nuxt-link>
        <nuxt-link v-for="item in menu" :key="item.id" :to="item.link">
          {{ item.label }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import menu from "~/fakeDB/menu";

export default {
  data() {
    return {
      menu,
    };
  },

  computed: {
    ...mapGetters({
      scrollY: "window/getScrollY",
      showMenuMobile: "layout/getShowMenuMobile",
    }),
  },

  methods: {
    ...mapActions({
      changeShowMenuMobile: "layout/changeShowMenuMobile",
    }),
  },
};
</script>

<style scoped>
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
  width: 130px;
  padding: 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  transition: all 0.5s;
}

.main-menu a:not(.nuxt-link-exact-active):hover {
  color: var(--dd-primary-lighten);
}
.main-menu .nuxt-link-exact-active {
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
  transition: color 0.5s, padding 0.5s;
}
.main-menu-solid a:not(.nuxt-link-exact-active):hover {
  color: #fff;
  background: var(--dd-primary);
  padding: 0 15px 20px;
}
.main-menu-solid .nuxt-link-exact-active {
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

.main-menu-mobile-mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 501;
}
.main-menu-mobile-collapse {
  position: fixed;
  top: 0;
  right: -65%;
  bottom: 0;
  background: #fff;
  width: 65%;
  border-left: 1px solid #ccc;
  z-index: 502;
  transition: right 0.5s;
}

.main-menu-mobile-collapse a {
  height: 70px;
  padding: 0 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  color: var(--dd-primary);
  transition: color 0.5s, padding 0.5s;
}
.main-menu-mobile-collapse a:not(.nuxt-link-exact-active):hover {
  color: #fff;
  background: var(--dd-primary);
  padding: 0 15px 20px;
}
.main-menu-mobile-collapse .nuxt-link-exact-active {
  background: #fff;
  background: var(--dd-light);
}
</style>