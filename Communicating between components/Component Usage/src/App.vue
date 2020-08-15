<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <!-- <app-quote>
          <h2 slot="title"> {{ quoteTitle }} </h2>
          <p slot="content">A wonderful quote</p>
        </app-quote> -->
        
        <p> {{ selectedComponent }} </p>
        <!-- We might use keep-alive because by default our dynamic components are
        detroyed and when we use keep-alive we override that behavior -->
        <keep-alive>
          <!-- Dynamic Components; component is a reserved word just like slot and it 
          allows us to dynamically add components -->
          <!-- ':is="selectedComponent"' is basically binding this component to the
          selected component property which is appQuote by default -->
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'
  import Author from './components/Author.vue'
  import New from './components/New.vue'

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
</style>
