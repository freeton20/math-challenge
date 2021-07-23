export default {
    state: {
        timer: 0,
        timerVisibility: false,
        timerId: null
    },
    getters: {
        getTimer(state) {
            return state.timer;
        },
        getTimerVisibility(state) {
            return state.timerVisibility;
        },
        getTimerId(state) {
            return state.timerId;
        }
    },
    mutations: {
        setNewTime(state, newTime) {
            state.timer = newTime;
        },
        setNewVisibility(state, newVisibility) {
            state.timerVisibility = newVisibility;
        },
        setTimerId(state, newTimerId) {
            state.timerId = newTimerId;
        },
        deleteTimer(state) {
            state.timer = 0;
            state.timerId = null;
        }
    },
    actions: {
        changeTime({ commit }, newTime) {
            commit("setNewTime", newTime);
        },
        runTimer({ commit, getters }) {
            if (getters.getTimerId == null) {
                let timerId = setInterval(function (getters) {
                    let newTime = getters.getTimer + 1;
                    commit("setNewTime", newTime);
                }, 1000, getters);
                commit("setTimerId", timerId);
            }
        },
        clearTimer({ commit, getters }) {
            clearInterval(getters.getTimerId);
            commit('deleteTimer');
        },
        changeTimerVisibility({ commit }, newVisibility) {
            commit("setNewVisibility", newVisibility)
        }
    }
}