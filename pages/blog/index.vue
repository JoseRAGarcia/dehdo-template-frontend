<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <div
          class="blog-banner-container"
          :style="scrollY > 30 && 'filter: blur(2px);'"
        >
          <img
            class="blog-banner"
            loading="lazy"
            src="/img/blog/bruxa.jpg"
            alt=""
          />
          <h1 class="blog-title text-dd-shadow text-dd-light p-2 rounded">Blog</h1>
        </div>
      </b-col>
    </b-row>
    <b-container style="min-height: calc(100vh - 440px)">
      <b-row>
        <b-col class="text-left">
          <div class="my-4">
            <h2 class="content-title">
              Aqui você poderá manter seus clientes atualizados sobre seus
              produtos, serviços e todas as novidades do seu ramo de atuação!
            </h2>
          </div>
          <p>
            Através da ferramenta administrativa, você pode criar postagens para
            o blog além de ordená-los da forma que preferir e fazer toda a
            customização da postagem.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "blog",

  computed: {
    ...mapGetters({
      scrollY: "window/getScrollY",
    }),
  },
};
</script>

<style scoped>
.blog-banner-container {
  width: 100%;
  height: 300px;
  margin-top: 70px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(0);
  transition: filter 0.5s;
}

.blog-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-title {
  position: absolute;
  z-index: 1;
}
</style>