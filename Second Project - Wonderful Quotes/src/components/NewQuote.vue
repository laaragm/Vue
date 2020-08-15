<template>
    <div class="row">
        <form class="row">
            <!-- Move columns to the right using .offset-md-* classes -->
            <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label>Quote</label>
                <textarea 
                    class="form-control" 
                    rows="3" 
                    v-model="quote"
                    placeholder="Your quote here"
                ></textarea>
            </div>
            <div class="text-center form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <!-- We're adding the .prevent modifier to prevent the default behavior
                because we don't want to submit the form (this will send a request to
                the server and reload the page) -->
                <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                //We're sending an event to the parent saying that the quote was added
                this.$emit('quoteToAdd', this.quote);
                //Reset the quote so the form gets cleared
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    
</style>