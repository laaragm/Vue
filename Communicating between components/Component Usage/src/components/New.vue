<template>
  <div>
      <h3>New Quote</h3>
      <button @click="counter++">Increase</button>
      <p> {{ counter }} </p>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            };
        },
        //Dynamic component lifecycle hooks
        //Lifecycle hooks are the defined methods which get executed in a certain 
        //stage of the Vue object lifespan.
        destroyed() {
            console.log('Destroyed')
        },
        deactivated() {
            console.log('Deactivated')
        },
        activated() {
            console.log('Activated')
        }
    }
</script>

<style>

</style>