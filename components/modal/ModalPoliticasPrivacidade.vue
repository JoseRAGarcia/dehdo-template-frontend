<template>
  <ModalContainer
    v-if="showModal.includes('politicas-privacidade')"
    idModal="politicas-privacidade"
    title="Políticas de Privacidade"
    modalWidth="95%"
  >
    <b-row>
      <b-col>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor nam,
        fuga earum ad soluta sed nihil debitis facilis eligendi eveniet officia,
        aliquid, quis molestiae quae similique. Quidem, ut nostrum?
      </b-col>
    </b-row>
  </ModalContainer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      showModal: "modal/getShowModal",
    }),
  },
};
</script>