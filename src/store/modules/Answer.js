export default {
    state:{
        showAnswer: false,   
        answerColor: 'black'
    },
    getters: {
        getShowAnswer(state) {
            return state.showAnswer;
        },
        getAnswerColor(state){
            return state.answerColor
        }
    },
    mutations: {
        updateShowAnswer(state, ifShow) {
            state.showAnswer = ifShow;
        },
        updateAnswerColor(state, color){
            state.answerColor = color;
        }
    },
    actions: {
        changeShowAnswer({ commit }, ifShow) {
            commit("updateShowAnswer", ifShow)
        },
        changeAnswerColor({commit}, color){
            commit('updateAnswerColor', color);
        }
    }
}