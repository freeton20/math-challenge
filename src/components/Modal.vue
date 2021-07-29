<template>
  <b-modal
    class="text-center"
    v-model="modalShow"
    ok-only
    id="modal-center"
    centered
    title="Extraton is not available!"
  >
    <p class="text-center my-4">
      Please, install
      <a
        href="https://chrome.google.com/webstore/detail/extraton/hhimbkmlnofjdajamcojlcmgialocllm"
        target="blank"
        >extraton extension</a
      >
    </p>
  </b-modal>
</template>
<script>
export default {
  computed: {
    modalShow() {
      return this.$store.getters.getNoExtVisibility;
    },
  },
};
</script>