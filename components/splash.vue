<template>
  <div class="splash-container">
    <b-spinner type="grow"></b-spinner>
  </div>
</template>

<style scoped>
.splash-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
</style>