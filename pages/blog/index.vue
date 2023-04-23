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
            src="/img/blog/blog-2.jpg"
            alt=""
          />
          <h1 class="blog-title text-dd-shadow text-dd-light p-2 rounded">
            Blog
          </h1>
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

      <b-row>
        <b-col class="p-0 p-lg-3 mt-2">
          <article class="posts-container">
            <b-row>
              <b-col
                class="col-12 col-lg-6"
                v-for="post in posts"
                :key="post.idPost"
              >
                <nuxt-link :to="`/post/${post.idPost}`">
                  <div class="post-card bg-dd-light border rounded shadow mx-2 my-4">
                    <div class="post-img-container">
                      <img
                        width="800"
                        height="560"
                        class="rounded"
                        :src="post.img"
                      />
                    </div>
                    <div class="post-content p-2">
                      <b-row>
                        <b-col>
                          <h4 class="content-title post-title">
                            {{ post.title }}
                          </h4>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col class="post-text">
                          {{ post.content.slice(0, 255) }}...
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </nuxt-link>
              </b-col>
            </b-row>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import posts from "~/fakeDB/posts";

export default {
  name: "blog",

  data() {
    return {
      posts,
    };
  },

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

.post-card {
  overflow: hidden;
}

.post-img-container {
  width: 100%;
  height: 380px;
  overflow: hidden;
}
.post-img-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s;
}
.post-img-container img:hover {
  transform: rotate(3deg) scale(110%);
}

.post-title {
  font-size: 1.5rem;
}
</style>