
import { initExtraton, getUsers } from "../../api/TonApi";
export default {
    state: {
        spinner: false,
        users: [],
        saveButtonVisibility: false,
        disabled: false
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
        },
        isDisabledSaveButton(state) {
            return state.disabled;
        }
    },
    mutations: {
        changeSpinnerVisibility(state, newVisibility) {
            state.spinner = newVisibility
        },
        updateUsers(state, data) {
            let users = [];
            //make array
            for (let i = 0; i < data.value0.length; i++) {
                users[i] = {
                    address: data.value0[i],
                    time: data.value1[i]
                }
            }
            //sort array
            users.sort((a, b) => {
                return a.time - b.time;
            })

            //change sec to min and sec
            users = users.map((user) => {
                let seconds = user.time % 60; // Получаем секунды
                seconds = seconds < 10 ? "0" + seconds : seconds;
                let minuts = Math.trunc((user.time / 60) % 60); // Получаем минуты
                minuts = minuts < 10 ? "0" + minuts : minuts;
                return {
                    address: user.address,
                    time: `${minuts}:${seconds}`
                }
            })

            state.users = users;
        },
        changeSaveButtonVisibility(state, newVisibility) {
            state.saveButtonVisibility = newVisibility;
        },
        disableEnableSaveButton(state, newBtnState) {
            state.disabled = newBtnState;
        }
    },
    actions: {
        async runExtraton({ commit }, timer) {                 
            commit("changeSpinnerVisibility", true);
            const response = await initExtraton(timer);
            if (response) {
                commit("updateUsers", await getUsers());
            }
            commit("changeSpinnerVisibility", false);
            commit("disableEnableSaveButton", false);
        },
        async getUsers({ commit }) {
            commit("updateUsers", await getUsers());
        },
        setSaveButtonVisibility({ commit }, newVisibility) {
            commit("changeSaveButtonVisibility", newVisibility);
        },
        changeSaveButtonDisableEnableState({ commit }, newBtnState) {
            commit("disableEnableSaveButton", newBtnState);
        }
    }
}