<template>
  <b-container fluid>
    <Header />
    <Nuxt />
    <Footer />
  </b-container>
</template>

<script>
import setLayoutService from "~/services/setLayoutService";

export default {
    beforeMount() {
        setLayoutService()
    },
}
</script>