export default {
    state: {
        resetVisibilityState: false
    },
    getters: {
        isResetShowed(state) {
            return state.resetVisibilityState;
        }
    },
    mutations: {
        showHideReset(state, newBtnVisibilityState) {
            state.resetVisibilityState = newBtnVisibilityState;
        }
    },
    actions: {
        changeResetBtnVisibility({ commit }, newBtnVisibilityState) {
            commit("showHideReset", newBtnVisibilityState);
        }
    }
}