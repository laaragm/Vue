import Vue from 'vue'
import App from './App.vue'

//You might centralize code in an event Bus
//It's perfectly fine to use such a new Vue instance to centralize certain tasks,
//submit data, transport data across your application and therefore outsource certain
//pieces of your code into such a central place
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdoted', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});