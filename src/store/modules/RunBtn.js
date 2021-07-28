export default {
    state: {
        btnName: 'Start',
        disabled: false
    },
    getters: {
        getBtnName(state) {
            return state.btnName;
        },
        isDisabled(state) {
            return state.disabled;
        }
    },
    mutations: {
        updateBtnName(state, newName) {
            state.btnName = newName;
        },
        disableEnable(state, newBtnState) {
            state.disabled = newBtnState;
        }
    },
    actions: {
        changeBtnName({ commit }, newBtnName = 'Next') {
            commit("updateBtnName", newBtnName)
        },
        changeBtnState({ commit }, newBtnState) {
            commit("disableEnable", newBtnState);
        }
    }
}