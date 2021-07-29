<template>
  <div v-if="timerVisibility" class="text-center mt-3 mb-3">
    Time: {{ timer }}
  </div>
</template>

<script>
export default {
  computed: {
    timerVisibility() {
      return this.$store.getters.getTimerVisibility;
    },
    timer() {
      let currentTime = this.$store.getters.getTimer;
      let seconds = currentTime % 60; // Получаем секунды
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let minuts = Math.trunc((currentTime / 60) % 60); // Получаем минуты
      minuts = minuts < 10 ? "0" + minuts : minuts;
      return `${minuts}:${seconds}`;
    },
  },
};
</script>