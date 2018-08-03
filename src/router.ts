import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Component from '../node_modules/vue-class-component';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello-ts',
      name: 'hellots',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/HelloTs.vue'),
    },
  ],
});