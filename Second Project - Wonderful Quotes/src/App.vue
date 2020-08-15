<template>
    <!-- Vuetify: In order for your application to work properly, you must wrap it in 
    a v-app component -->
    <v-app>
        <div class="container">
            <app-header :numberOfQuotes="numberOfQuotes" :maxQuotes="maxQuotes"></app-header>
            <!-- Since we already emitted the event now we can simply listen to it
            on the selector and then execute something we need -->
            <app-new-quote @quoteToAdd="newQuote"></app-new-quote>
            <!-- quotes is bound to the quotes array, so we're passing the array to the 
            QuoteGrid; :quotes refers to the array and "quotes" refers to the props
            we're expecting in QuoteGrid -->
            <app-quote-grid :quotes="quotes" @quoteToDelete="delQuote"></app-quote-grid>
            <!-- Bootstrap row class -->
            <div class="row">
                <div class="col-sm-12 text-center">
                    <!-- Alert is also a bootstrap class -->
                    <div class="alert alert-info">
                        Info: Click on a Quote to delete it.
                    </div>
                </div>
            </div>
            <div v-show="showAlert">
                <!-- The components above are from vuetify -->
                <v-dialog v-model="showAlert" max-width="290">
                    <v-card>
                        <v-btn
                            color="blue darken-1"
                            dark
                            class="closeBtn"
                            @click.stop="showAlert = false"
                        >
                            x
                        </v-btn>
                        <v-card-title>Error</v-card-title>
                        <v-card-text>Quote cannot be empty.</v-card-text>
                    </v-card>
                </v-dialog>
            </div>
            <div v-show="maxQuotesAlert">
                <!-- The components above are from vuetify -->
                <v-dialog v-model="maxQuotesAlert" max-width="290">
                    <v-card>
                        <v-btn
                            color="blue darken-1"
                            dark
                            class="closeBtn"
                            @click.stop="maxQuotesAlert = false"
                        >
                            x
                        </v-btn>
                        <v-card-title>Error</v-card-title>
                        <v-card-text>Maximum number of Quotes achieved. </v-card-text>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </v-app>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import Header from './components/Header.vue'

    export default {
        data: function() {
            return {
                quotes : [
                    'This is the first quote'
                ],
                maxQuotes: 10,
                showAlert: false,
                numberOfQuotes: 1,
                maxQuotesAlert: false
            }
        },
        methods: {
            newQuote(quote) {
                if (quote === "") {
                    this.showAlert = true;
                }
                else if (this.numberOfQuotes < 10){
                    this.quotes.push(quote);
                    this.numberOfQuotes++;
                }
                else{
                    this.maxQuotesAlert = true;
                }
            },
            delQuote(index) {
                //The splice() method adds/removes items to/from an array, and returns
                //removed item(s).
                this.quotes.splice(index, 1);
                this.numberOfQuotes--;
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
    .closeBtn{
        margin-left: 226px;
    }
</style>
