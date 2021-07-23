<template>
  <div id="app">
    <title-rules />
    <counter />
    <question />
    <timer />
    <div class="d-flex flex-row justify-content-center">
      <run-btn /> <reset />
    </div>    
  </div>
</template>

<script>
import TitleRules from "./components/Title.vue";
import RunBtn from "./components/RunBtn.vue";
import Question from "./components/Question.vue";
import Counter from "./components/Counter.vue";
import Reset from "./components/Reset.vue";
import Timer from "./components/Timer.vue";

export default {
  name: "App",
  components: { TitleRules, RunBtn, Question, Counter, Reset, Timer },
};
</script>

<style>
#app {
}
</style>
