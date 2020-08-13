<!-- Setup a new project:
  $ npm install -g vue-cli
  $ vue init webpack-simple my-project
  $ cd my-project
  $ npm install
  $ npm run dev 
  $ npm run build (it'll build it for production)-->

<!-- A vue file has a template, a script and it might have a style -->
<!-- babel is a transpiler which allows us to write ES6 code -->

<template>
  <!-- <h1>Server status: {{ status }}</h1> -->
  <div class="container">
      <app-header></app-header>
      <hr>
      <div class="row">
          <app-servers></app-servers>
          <app-server-details></app-server-details>
          <!-- <app-server-status></app-server-status> -->
      </div>
      <hr>
      <app-footer></app-footer>
  </div>
</template>

<!-- The script holds our vue.js code for this template -->
<script>
  //Whatever we export here, this object is a vue instance or is the same object
  //we use in a vue instance (it basically behaves like a vue instance)
  import Header from './components/Shared/Header.vue'
  import Footer from './components/Shared/Footer.vue'
  import Servers from './components/Server/Servers.vue'
  import ServerDetails from './components/Server/ServerDetails.vue'
  import ServerStatus from './components/Server/ServerStatus.vue'

  export default {
    //In this case data has to be an anonymous function so the function gets executed
    //for each separate component
    //data: function() {
      //status: 'Critical'
    //}
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer,
      // 'app-server-status': ServerStatus
    }
  }
</script>

<style>

</style>
