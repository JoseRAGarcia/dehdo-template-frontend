<template>
  <section>
    <b-row>
      <b-col class="dd-content bg-dd-light">
        <div class="dd-card" v-for="(card, index) in 10" :key="index">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum
            dolorem quidem expedita, at sapiente odio ratione ab corporis? Culpa
            quis obcaecati officiis, vel dolorem hic tenetur illo eius fugiat.
          </p>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>

