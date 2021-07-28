export default {
    state: {
        counter: 0,
        showCounter: false,
        totalQuestions: 1      
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        getShowCounter(state) {
            return state.showCounter;
        },
        getTotalQuestions(state){
            return state.totalQuestions;
        }
    },
    mutations: {
        updateShowCounter(state, ifShow) {
            state.showCounter = ifShow;
        },
        add(state){
            state.counter++;
        },
        reset(state){
            state.counter = 0;
        }
    },
    actions: {
        changeShowCounter({ commit }, ifShow) {
            commit("updateShowCounter", ifShow)
        },
        addToCounter({ commit }){
            commit("add");
        },
        resetCounter({ commit }){
            commit("reset");
        }
    }
}