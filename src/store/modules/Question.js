export default {
    state:{
        question: '',
        questionColor: 'black'        
    },
    getters: {
        getQuestion(state){
            return state.question;
        },
        getQuestionColor(state){
            return state.questionColor
        }
    },
    mutations: {
        updateQuestion(state){
            let signs = ["+","-"];
            let sign = signs[Math.floor(Math.random()*signs.length)];
            state.question = `${(Math.floor(Math.random() * 100)+1)} ${sign} ${(Math.floor(Math.random() * 100)+1)}`;
        },
        updateQuestionColor(state, color){
            state.questionColor = color;
        }
    },
    actions:{
        changeQuestion({commit}){
            commit('updateQuestion');
        },
        changeQuestionColor({commit}, color){
            commit('updateQuestionColor', color);
        }
    }
}