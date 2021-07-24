export default {
    state:{
        question: '',
        questionColor: 'black',
        questionVisibility: true,        
    },
    getters: {
        getQuestion(state){
            return state.question;
        },
        getQuestionColor(state){
            return state.questionColor
        },
        getQuestionVisibility(state){
            return state.questionVisibility;
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
        },
        changeQuestionVisibility(state, newQuestionVisibility){
            state.questionVisibility = newQuestionVisibility;
        }
    },
    actions:{
        changeQuestion({commit}){
            commit('updateQuestion');
        },
        changeQuestionColor({commit}, color){
            commit('updateQuestionColor', color);
        },
        changeQuestionVisibility({ commit }, newQuestionVisibility){
            commit('changeQuestionVisibility', newQuestionVisibility);
        }
    }
}