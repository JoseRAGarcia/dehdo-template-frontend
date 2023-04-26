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
            src="/img/blog/blog.jpg"
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
                v-for="post in loadingPosts ? 4 : posts"
                :key="post.idPost"
              >
                <nuxt-link :to="`/post/${post.idPost}`">
                  <div
                    class="post-card bg-dd-light border rounded shadow mx-2 my-4"
                  >
                    <div
                      class="post-img-container"
                      :class="{ skeleton: loadingPosts }"
                    >
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
                          <div
                            v-if="loadingPosts"
                            class="skeleton skeleton-text w-50 mb-2"
                          ></div>
                          <h4 v-else class="content-title post-title">
                            {{ post.title }}
                          </h4>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col class="post-text">
                          <div v-if="loadingPosts">
                            <div
                              class="skeleton skeleton-text w-100 mb-1"
                            ></div>
                            <div
                              class="skeleton skeleton-text w-100 mb-1"
                            ></div>
                            <div
                              class="skeleton skeleton-text w-100 mb-1"
                            ></div>
                            <div class="skeleton skeleton-text w-50"></div>
                          </div>
                          <p v-else>{{ post.content.slice(0, 255) }}...</p>
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

import fakePosts from "~/fakeDB/posts";

export default {
  name: "blog",

  mounted() {
    this.$fetch();
  },

  async fetch() {
    this.listPosts();
  },

  data() {
    return {
      fakePosts,

      loadingPosts: false,

      posts: [],
    };
  },

  computed: {
    ...mapGetters({
      scrollY: "window/getScrollY",
    }),
  },

  methods: {
    listPosts() {
      this.loadingPosts = true;

      setTimeout(() => {
        this.posts = Array.from(this.fakePosts);
        this.loadingPosts = false;
      }, 1500);
    },
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