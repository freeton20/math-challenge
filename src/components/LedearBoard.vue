<template>
    <div>
    <div class="h2 text-center mt-5">Leaderboard</div>
    <b-table striped hover :items="items"></b-table>
    </div>
</template>
<script>
export default {  
    mounted(){
       this.$store.dispatch('getUsers');
    }, 
    computed:{
        items() {
            return this.$store.getters.getUsers;
        }
    }
}
</script>