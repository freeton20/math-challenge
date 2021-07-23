<template>
  <div>
    <h1 class="text-center">Math challenge</h1>
    <div v-if="showRules" class="ml-4 mr-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic vero saepe
      ut ullam cum minima quis voluptates, accusantium quae. Ex distinctio
      dolorum nulla mollitia, modi quas earum qui corrupti fuga ipsa accusantium
      odit autem nesciunt!
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showRules() {
      return this.$store.getters.getShowRules;
    },
  },
};
</script>
