import Vue from 'vue'
import Vuex from 'vuex'

import Title from './modules/Title';
import RunBtn from './modules/RunBtn';
import Question from './modules/Question';
import Answer from './modules/Answer';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Title, RunBtn, Question, Answer
    }
})