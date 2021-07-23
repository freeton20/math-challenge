<template>
  <span>
    <span v-if="showAnswer"> = </span>
    <input
      v-if="showAnswer"
      type="number"
      placeholder="?"
      class="h1"
      @keyup="checkAnswer"
      @keyup.enter="enterPressed"
      v-model="answer"
      :style="'color:' + answerColor"
    />
  </span>
</template>
<script>
export default {
  computed: {
    answer: {
      set(value) {
        this.$store.dispatch("saveAnswer", value);
      },
      get() {
        return this.$store.getters.getAnswer;
      },
    },
    showAnswer() {
      return this.$store.getters.getShowAnswer;
    },
    answerColor() {
      return this.$store.getters.getAnswerColor;
    },
  },
  methods: {
    checkAnswer() {
      if (
        eval(this.$store.getters.getQuestion) == this.$store.getters.getAnswer
      ) {
        this.$store.dispatch("changeAnswerColor", "green");
        this.$store.dispatch("changeQuestionColor", "green");
        this.$store.dispatch("changeBtnState", false);
      }else{
        this.$store.dispatch("changeAnswerColor", "black");
        this.$store.dispatch("changeQuestionColor", "black");
        this.$store.dispatch("changeBtnState", true);
      }
    },
    enterPressed() {
       if (
        eval(this.$store.getters.getQuestion) !== eval(this.$store.getters.getAnswer)
      ) {
        this.$store.dispatch("changeAnswerColor", "red");
        this.$store.dispatch("changeQuestionColor", "red");
      }else{
        this.$store.dispatch("run");
      }
    },
  },
};
</script>
<style scoped>
input {
  border: 0px;
  width: 8rem;
  outline: none;
}
/*remove arrows*/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>