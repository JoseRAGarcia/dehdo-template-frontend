<template>
  <section>
    <b-row>
      <b-col class="d-flex p-0">
        <div
          class="admin-main-menu-container overflow-hidden bg-dd-primary"
          :style="adminMainMenuStyle"
        >
          <nuxt-link v-show="!breakpoint.sm" to="/admin-management">
            <div class="logo-container bg-white shadow">
              <img
                loading="lazy"
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
          <div class="menu p-4">
            <div class="menu-title mb-4">Menu</div>
            <div class="menu-item" v-b-toggle="'menu-collapse-1'">
              <div>
                <i class="bx bx-xs bx-file"></i>
                Cadastro
              </div>
            </div>
            <b-collapse id="menu-collapse-1">
              <nuxt-link
                to="/admin-management/cadastro/produtos"
                class="menu-subitem"
                >Produtos</nuxt-link
              >
            </b-collapse>
          </div>
        </div>
        <div class="bg-dd-light" :style="contentSlotStyle">
          <slot></slot>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      breakpoint: "window/getBreakpoint",
      adminMenuCollapsed: "layout/getAdminMenuCollapsed",
    }),

    adminMainMenuStyle() {
      if (!this.breakpoint.sm) {
        return this.adminMenuCollapsed ? "width: 70px;" : "width: 250px;";
      } else {
        return this.adminMenuCollapsed
          ? "width: 250px; position: fixed; top: 70px; left: -250px"
          : "width: 250px; position: fixed; top: 70px; left: 0";
      }
    },

    contentSlotStyle() {
      if (!this.breakpoint.sm) {
        return `width: calc(100% - ${
          this.adminMenuCollapsed || this.breakpoint.sm ? "70" : "250"
        }px); transition: width 0.3s;`;
      } else {
        return "width: 100%";
      }
    },
  },
};
</script>

<style scoped>
.admin-main-menu-container {
  min-height: calc(100vh - 70px);
  transition: width 0.3s, left 0.3s;
  z-index: 500;
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

.menu-title {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.menu-item {
  font-weight: 600;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 5px;
}

.menu-item:hover,
.menu-subitem:hover,
.nuxt-link-active {
  color: #fff !important;
  text-decoration: none;
}

.menu-subitem {
  font-weight: 600;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
  margin-left: 30px;
}
</style>