<template>
  <div>
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
      if(this.$store.getters.getAnswer == eval(this.$store.getters.getQuestion)){
        return 'green';
      }else{
        return 'black';
      }
    },
  },
  components: {
    Answer,
  },
};
</script>
