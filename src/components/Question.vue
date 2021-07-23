<template>
  <div>
    <div :style="'color:' + questionColor" class="text-center h1">
      {{ question }} <answer />
    </div>
  </div>
</template>
<script>
import Answer from "./Answer.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    question: "getQuestion",
    questionColor: "getQuestionColor",
  }),
  components: {
    Answer,
  },
};
</script>
