export default {
    state: {
        btnName: 'Start'
    },
    getters: {
        getBtnName(state) {
            return state.btnName;
        }
    },
    mutations: {
        updateBtnName(state, newName) {
            state.btnName = newName;
        }
    },
    actions: {
        changeBtnName({ commit }) {
            commit("updateBtnName", 'Next')
        }
    }
}