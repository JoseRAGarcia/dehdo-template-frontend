<template>
  <div class="splash-container bg-dd-primary" :style="!loaded && 'opacity: 1;'">
    <b-spinner style="color: var(--dd-primary-lighten)"></b-spinner>
  </div>
</template>

<script>
export default {
  props: {
    loaded: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
.splash-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  opacity: 0;
  transition: opacity 1s;
}
</style>