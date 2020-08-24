import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from './components/store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-fed49.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history', //in order to get nicer urls
  routes: routes 
});

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
});
