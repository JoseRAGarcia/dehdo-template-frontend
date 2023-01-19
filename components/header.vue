<template>
  <header>
    <b-row>
      <b-col class="header-container bg-white shadow">
        <nuxt-link to="/">
          <div class="logo-container">
            <img src="/img/dehdo-logo.png" alt="" />
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header-container {
  height: 100px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
}

.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-container img {
  max-height: 90%;
  max-width: 250px;
}
</style>