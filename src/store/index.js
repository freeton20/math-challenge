import Vue from 'vue'
import Vuex from 'vuex'

import Title from './modules/Title';
import RunBtn from './modules/RunBtn';
import Question from './modules/Question';
import Answer from './modules/Answer';
import Counter from './modules/Counter';
import Reset from './modules/Reset';
import Timer from './modules/Timer';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        run() {
            this.dispatch("changeBtnName");
            this.dispatch("changeBtnState", true);
            this.dispatch("changeQuestion");
            this.dispatch("changeShowRules", false);
            this.dispatch("changeShowAnswer", true);
            this.dispatch("saveAnswer", '');
            this.dispatch("changeAnswerColor", "black");
            this.dispatch("changeQuestionColor", "black");
            this.dispatch("changeShowCounter", true);
            this.dispatch("addToCounter", true);
            this.dispatch("changeResetBtnVisibility", true);
            this.dispatch("changeTimerVisibility", true);
            this.dispatch("runTimer");
        },
        reset() {
            this.dispatch("changeQuestion");
            this.dispatch("saveAnswer", '');
            this.dispatch("changeAnswerColor", "black");
            this.dispatch("changeQuestionColor", "black");
            this.dispatch("resetCounter");
            this.dispatch("clearTimer");
            this.dispatch("runTimer");
        }
    },
    modules: {
        Title, RunBtn, Reset, Question, Answer, Counter, Timer
    }
})