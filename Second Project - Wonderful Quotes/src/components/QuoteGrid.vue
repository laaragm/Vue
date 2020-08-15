<template>
    <div class="row">
        <!-- The native modifier basically tells vue js to react to a click 
        on that component if it happend on the native element of this component -->
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue'

    export default {
        //We need to be able to get the array of quotes from the outside
        //We're expecting quotes as props here
        props: ['quotes'],
        methods: {
            deleteQuote(index) {
                this.$emit('quoteToDelete', index);
            }
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style>

</style>