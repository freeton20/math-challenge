export default {
    state: {
        noExtVisibility: false,
    },
    getters: {
        getNoExtVisibility(state) {
            return state.noExtVisibility;
        }
    },
    mutations: {
        changeNoExtVisibility(state, visibility) {
            state.noExtVisibility = visibility;
        }
    },
    actions: {
        setNoExtVisibility({ commit }, visibility) {
            commit("changeNoExtVisibility", visibility)
        }
    }
}