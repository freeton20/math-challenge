export default {
    state: {
        answer: null,
        showAnswer: false,
        answerColor: 'black'
    },
    getters: {
        getAnswer(state) {
            return state.answer;
        },
        getShowAnswer(state) {
            return state.showAnswer;
        },
        getAnswerColor(state) {
            return state.answerColor
        }
    },
    mutations: {
        updateAnswer(state, answer) {
            state.answer = answer;
        },
        updateShowAnswer(state, ifShow) {
            state.showAnswer = ifShow;
        },
        updateAnswerColor(state, color) {
            state.answerColor = color;
        }
    },
    actions: {
        saveAnswer({ commit }, answer) {
            commit("updateAnswer", answer)
        },
        changeShowAnswer({ commit }, ifShow) {
            commit("updateShowAnswer", ifShow)
        },
        changeAnswerColor({ commit }, color) {
            commit('updateAnswerColor', color);
        }
    }
}