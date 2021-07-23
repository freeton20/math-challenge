export default {
    state: {
        showRules: true
    },
    getters: {
        getShowRules(state) {
            return state.showRules;
        }
    },
    mutations: {
        updateShowRules(state, ifShow) {
            state.showRules = ifShow;
        }
    },
    actions: {
        changeShowRules({ commit }, ifShow) {
            commit("updateShowRules", ifShow)
        }
    }
}