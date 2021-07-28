<template>
  <div v-if="questionVisibility">
    <div :style="'color:' + questionColor" class="text-center h1">
      {{ question }} <answer />
    </div>
  </div>
</template>
<script>
import Answer from "./Answer.vue";
export default {
  computed: {
    question() {
      return this.$store.getters.getQuestion;
    },
    questionColor() {
      return this.$store.getters.getQuestionColor;
    },
    questionVisibility() {
      return this.$store.getters.getQuestionVisibility;
    },
  },
  components: {
    Answer,
  },
};
</script>
