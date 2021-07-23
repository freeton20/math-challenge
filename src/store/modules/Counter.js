export default {
    state: {
        counter: 0,
        showCounter: false
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        getShowCounter(state) {
            return state.showCounter;
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
            state.counter = 1;
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