<template>
    <div v-if="showCounter" class="text-center h4">
        Question: {{counter}}
    </div>
</template>
<script lang="ts">

export default {
    computed: {
        counter(){
            return this.$store.getters.getCounter;
        },
        showCounter() {
            return this.$store.getters.getShowCounter;
        }
    },
}
</script>