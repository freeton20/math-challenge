<template>
  <div class="text-center mt-4">
    <b-button id="runBtn" @click="run" variant="outline-success">{{
      btnName
    }}</b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({ btnName: "getBtnName" }),
  methods: {
    run() {
      this.$store.dispatch("changeBtnName");
      this.$store.dispatch("changeQuestion");
      this.$store.dispatch("changeShowRules", false);
      this.$store.dispatch("changeShowAnswer", true);
    },
  },
};
</script>
<style scoped>
#runBtn {
  width: 6rem;
}
</style>