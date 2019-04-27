import Vue from 'vue';
import Vuex from 'vuex';

import todos, {getters, mutations} from './todos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...todos,
  },
  getters,
  mutations,
  actions: {

  },
});
