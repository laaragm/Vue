import Vue from 'vue'
import App from './App.vue'

//Registering filter globally
Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});

//A global mixin is added to every instance and thus every component in your application
//Lifecycle: global mixin is called first, then mixins added with the mixins array called
//next, and then code directly written into the instance is handled lastly (so it always)
//has the last word
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
