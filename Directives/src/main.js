import Vue from 'vue'
import App from './App.vue'

//Directives - Hook Functions
//bind(el, binding, vnode) -> once directive is attached
//inserted(el, binding, vnode) -> inserted in parent node
//update(el, binding, vnode, oldVnode) -> once component is updated (without children)
//componentUpdated(el, binding, vnode, oldVnode) -> once component is updated (with children)
//unbind(el, binding, vnode) -> once directive is removed
Vue.directive('highlight', { // v-highlight
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';

    //binding is the information about our directive binding (v-highlight)
    //and value is whatever we enter between the "" (eg. v-highlight="'blue'")
    // el.style.backgroundColor = binding.value; 

    var delay = 0;
    if (binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      //with arg we can get the info after the colon (eg. v-highlight:background="'purple'")
      if (binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
