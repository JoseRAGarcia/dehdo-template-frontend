<template>
  <footer>
    <b-row>
      <b-col class="footer-container p-4">
        <b-container fluid>
          <b-row>
            <b-col
              class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <nuxt-link to="/">
                <div class="logo-container">
                  <img
                    loading="lazy"
                    src="/img/dehdo-logo.png"
                    alt="Logotipo do site"
                  />
                </div>
              </nuxt-link>
            </b-col>
            <b-col class="col-12 col-md-5"></b-col>
            <b-col class="col-12 col-md-3 mt-4 m-md-0">
              <h2>NOSSAS REDES</h2>
              <div class="social-container">
                <i class="bx bx-md bxl-facebook-square"></i>
                <i class="bx bx-md bxl-instagram ml-2"></i>
                <i class="bx bx-md bxl-youtube ml-2"></i>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="sub-footer-container p-2 text-dd-primary">
        <b-container>
          <b-row>
            <b-col
              class="col-12 col-md-8 col-lg-6 d-flex align-items-center justify-content-center text-center"
            >
              <h2>
                Dehdo Template - Copyright ® {{ new Date().getFullYear() }} -
                Todos os Direitos Reservados.
              </h2>
            </b-col>
            <b-col
              class="col-12 col-md-4 col-lg-6 d-flex align-items-center justify-content-center"
            >
              <span class="dd-link" @click="changeShowModal('politicas-privacidade')">Políticas de Privacidade</span>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>    
  </footer>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  methods: {
    ...mapActions({
      changeShowModal: 'modal/changeShowModal',
    }),
  }
};
</script>

<style scoped>
.footer-container {
  background: var(--dd-dark);
  color: #fff;
  min-height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
}

.logo-container {
  height: 100%;
  transition: height 0.8s, width 0.8s;
}
.logo-container img {
  max-height: 90%;
  max-width: 250px;
}

.social-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.sub-footer-container {
  background: #fff;
  min-height: 48px;
  width: 100%;
  z-index: 500;
}

h2 {
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
}
</style>