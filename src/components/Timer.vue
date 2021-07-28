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
      let minuts = (currentTime / 60) % 60; // Получаем минуты
      return `${Math.trunc(minuts)}:${seconds}`;
    },
  },
};
</script>