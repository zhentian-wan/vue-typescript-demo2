import Vue from 'vue';
import Vuex from 'vuex';

import {todos} from './todos';
import {history} from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
  },
  plugins: [history]
});
