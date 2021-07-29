import Vue from 'vue'
import Vuex from 'vuex'

import Title from './modules/Title';
import RunBtn from './modules/RunBtn';
import Question from './modules/Question';
import Answer from './modules/Answer';
import Counter from './modules/Counter';
import Reset from './modules/Reset';
import Timer from './modules/Timer';
import SaveResult from './modules/SaveResult';
import Modal from './modules/Modal';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        run() {
            this.dispatch("addToCounter", true);
            if (this.getters.getCounter > this.getters.getTotalQuestions) {
                this.dispatch("stop");
                return;
            }
            this.dispatch("changeQuestionVisibility", true);
            this.dispatch("changeBtnName");
            this.dispatch("changeBtnState", true);
            this.dispatch("changeQuestion");
            this.dispatch("changeShowRules", false);
            this.dispatch("changeShowAnswer", true);
            this.dispatch("saveAnswer", '');
            this.dispatch("changeAnswerColor", "black");
            this.dispatch("changeQuestionColor", "black");
            this.dispatch("changeShowCounter", true);
            this.dispatch("changeResetBtnVisibility", true);
            this.dispatch("changeTimerVisibility", true);
            this.dispatch("runTimer");
            this.dispatch("setSaveButtonVisibility", false);
        },
        reset() {
            this.dispatch("resetCounter");
            this.dispatch("changeBtnName", "Start");
            this.dispatch("changeBtnState", false);
            this.dispatch("changeQuestionVisibility", false);
            this.dispatch("changeShowCounter", false);
            this.dispatch("clearTimer");
            this.dispatch("changeResetBtnVisibility", false);
            this.dispatch("setSaveButtonVisibility", false);
        },
        stop() {
            this.dispatch("changeBtnName", "Start");
            this.dispatch("changeQuestionVisibility", false);
            this.dispatch("resetCounter");
            this.dispatch("stopTimer");
            this.dispatch("changeShowCounter", false);
            this.dispatch("setSaveButtonVisibility", true);
            this.dispatch("changeResetBtnVisibility", false);
        }
    },
    modules: {
        Title, RunBtn, Reset, Question, Answer, Counter, Timer, SaveResult, Modal
    }
})