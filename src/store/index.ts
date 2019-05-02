import Vue from 'vue';
import Vuex from 'vuex';

import {todos} from './todos';
import {counter} from './counter';
import {counter as counter2} from './counter';
import {login} from './login';
import {history} from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    login,
    counter,
    counter2
  },
  plugins: [history({presist: true})]
});
