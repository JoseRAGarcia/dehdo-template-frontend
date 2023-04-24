<template>
  <article
    class="container-fluid modal-container"
    :style="loaded && 'opacity: 1;'"
  >
    <div class="modal-mask" @click="closeModal"></div>
    <b-row
      class="modal-content"
      :style="`height: ${modalHeight}; width: ${modalWidth}; ${modalStyle}`"
    >
      <b-col>
        <b-row style="position: sticky; top: 0; left: 0; right: 0; z-index: 1">
          <b-col
            v-if="header"
            class="modal-header bg-dd-light px-2"
          >
            <div class="d-flex align-items-center justify-content-start">
              <span v-if="icon" class="modal-icon">
                <img :src="icon" alt="" />
              </span>
              <div
                class="modal-title font-weight-bold text-dd-primary"                
              >
                {{ title }}
              </div>
            </div>
            <div @click="closeModal" style="cursor: pointer">
              <i class="bx bx-sm bx-x mt-1"></i>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <slot></slot>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    header: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    idModal: {
      type: String,
      default: null,
    },
    modalHeight: {
      type: String,
      default: "auto",
    },
    modalWidth: {
      type: String,
      default: "900px",
    },
    modalStyle: {
      type: String,
      default: "",
    }
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;      
    });
  },

  data() {
    return {
      loaded: false,
    };
  },

  methods: {
    ...mapActions({
      changeShowModal: "modal/changeShowModal",
    }),

    closeModal() {
      this.loaded = false;
      setTimeout(() => {
        this.changeShowModal(this.idModal);
      }, 300);
    },
  },
};
</script>

<style scoped>
.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s;
}

.modal-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  display: flex;
  background: #fff;
  max-width: 95%;
  max-height: 95%;
  border-radius: 5px;
  z-index: 1;
  overflow: auto;
  position: relative;
  font-size: 1rem;
}

.modal-header {
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 40px;
  font-size: 1rem;
  border-radius: 5px 5px 0 0;
  z-index: 1;
}

.modal-icon {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
.modal-icon img {
  max-height: 100%;
  max-width: 100%;
}
</style>