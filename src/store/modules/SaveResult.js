
import { initExtraton, getUsers } from "../../api/TonApi";
export default {
    state: {
        spinner: false,
        users: [],
        saveButtonVisibility: false
    },
    getters: {
        getSpinner(state) {
            return state.spinner;
        },
        getUsers(state) {
            return state.users;
        },
        getSaveButtonVisibility(state) {
            return state.saveButtonVisibility;
        }
    },
    mutations: {
        changeSpinnerVisibility(state, newVisibility) {
            state.spinner = newVisibility
        },
        updateUsers(state, data) {
            let users = [];
            for (let i = 0; i < data.value0.length; i++) {
                users[i] = {
                    address: data.value0[i],
                    score: data.value1[i]
                }
            }
            state.users = users;
        },
        changeSaveButtonVisibility(state, newVisibility) {
            state.saveButtonVisibility = newVisibility;
        }
    },
    actions: {
        async runExtraton({ commit }) {
            commit("changeSpinnerVisibility", true);
            await initExtraton(777);
            const users = await getUsers();
            commit("updateUsers", users);
            commit("changeSpinnerVisibility", false);
        },
        async getUsers({ commit }) {
            commit("updateUsers", await getUsers());
        },
        setSaveButtonVisibility({ commit }, newVisibility) {
            commit("changeSaveButtonVisibility", newVisibility);
        }
    }
}