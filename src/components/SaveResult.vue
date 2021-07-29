<template>
  <div
    class="text-center mt-4 ml-4"
    @mouseover="showTooltip"
    @click="hideTooltip"
  >
    <button
      v-show="getSaveButtonVisibility"
      :disabled="isDisabled"
      v-b-tooltip.manual
      title="Save result to blockchain"
      class="btn btn-outline-secondary"
      type="button"
      id="saveButton"
      @click="runExtraton"
    >
      Save
      <b-spinner v-show="showSpinner" small></b-spinner>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showedTooltip: false,
    };
  },
  methods: {
    showTooltip() {
      if (!this.showedTooltip) {
        this.$root.$emit("bv::show::tooltip");
        this.showedTooltip = true;
      }
    },
    hideTooltip() {
      this.$root.$emit("bv::hide::tooltip");
      this.$store.dispatch("changeSaveButtonDisableEnableState", true);
    },
    runExtraton() {
      this.$store.dispatch("runExtraton", this.$store.getters.getTimer);
    },
  },
  computed: {
    showSpinner() {
      return this.$store.getters.getSpinner;
    },
    getSaveButtonVisibility() {
      return this.$store.getters.getSaveButtonVisibility;
    },
    isDisabled(){
      return this.$store.getters.isDisabledSaveButton;
    }
  },
};
</script>