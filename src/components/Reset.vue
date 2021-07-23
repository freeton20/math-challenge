<template>
  <div v-if="visibilityState" class="text-center mt-4 ml-4">
    <b-button variant="outline-danger" @click="reset">Reset</b-button>
  </div>
</template>
<script>
export default {
  computed: {
    visibilityState() {
      return this.$store.getters.isResetShowed;
    },
  },
  methods:{
      reset() {
          this.$store.dispatch("reset");
      }
  }
};
</script>