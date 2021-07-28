<template>
  <div class="text-center mt-4">
    <b-button
      id="runBtn"
      @click="run"
      variant="outline-success"
      :disabled="isDisabled"
      >{{ btnName }}</b-button
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({ btnName: "getBtnName", isDisabled: "isDisabled" }),
  methods: {
    run() {
      this.$store.dispatch("run");
    },
  },
};
</script>
<style scoped>
#runBtn {
  width: 6rem;
}
</style>