<template>
  <header>
    <b-row>
      <b-col class="d-flex justify-content-end p-0">
        <div
          class="admin-header-container border-left shadow-sm bg-white"
          :style="adminHeaderStyle"
        >
          <div class="d-flex align-items-center justify-content-start">
            <nuxt-link v-show="breakpoint.sm" to="/admin-management">
              <div class="logo-container bg-white shadow">
                <img
                  class="text-dd-shadow"
                  :src="
                    adminMenuCollapsed || breakpoint.sm
                      ? '/img/dehdo-icon.png'
                      : '/img/dehdo-logo.png'
                  "
                  alt="Logotipo do site"
                />
              </div>
            </nuxt-link>
            <i
              class="bx bx-sm bx-menu collapse-menu ml-2"
              @click="changeAdminMenuCollapsed(!adminMenuCollapsed)"
            ></i>
          </div>
        </div>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      breakpoint: "window/getBreakpoint",
      adminMenuCollapsed: "layout/getAdminMenuCollapsed",
    }),

    adminHeaderStyle() {
      if (!this.breakpoint.sm) {
        return `width: calc(100% - ${
          this.adminMenuCollapsed || this.breakpoint.sm ? "70" : "250"
        }px);`;
      } else {
        return "width: 100%";
      }
    },
  },

  methods: {
    ...mapActions({
      changeAdminMenuCollapsed: "layout/changeAdminMenuCollapsed",
    }),
  },
};
</script>

<style scoped>
.admin-header-container {
  height: 70px;
  overflow: hidden;
  position: absolute;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: width 0.3s;
}

.logo-container {
  height: 70px;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-container img {
  max-height: 100%;
  max-width: 100%;
}

.collapse-menu {
  cursor: pointer;
  transition: color 0.3s;
}

.collapse-menu:hover {
  color: var(--dd-primary);
}
</style>