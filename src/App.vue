<template>
  <div id="app">
    <title-rules/>
    <question/>
    <run-btn/>
  </div>
</template>

<script>
import TitleRules from "./components/Title.vue";
import RunBtn from './components/RunBtn.vue';
import Question from './components/Question.vue';

export default {
  name: "App",
  components: {TitleRules, RunBtn, Question },
}
</script>

<style>
#app {
}
</style>
