import './hooks';

import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/index';
import '@/registerServiceWorker';
Vue.config.productionTip = false;

const load = true;
if (load) {
  import('./store/login').then(({login}) => {
    store.registerModule('login', login);
  });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
