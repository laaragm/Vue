import Vue from 'vue'
import App from './App.vue'
// import Home from './Home.vue'

// //We can register our componen globally
// Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  //This function will automatically render a certain template in the place of the
  //selector (in this case '#app'), so where we select our vue instance to be run at
  render: h => h(App)
});
