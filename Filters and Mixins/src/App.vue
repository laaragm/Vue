<!-- For more complex transformations use a computed property(they are more performant).
Filters can be a nice solution but sometimes it's better to use computed properties -->

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- We use | to apply our filters -->
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input v-model="filterText" placeholder="Filter">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <button @click="fruits.push('Berries')">Add new item</button>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!',
                // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                // filterText: ''
            }
        },
        //A filters will only transform the output value, it doesn't transform the data 
        //property (so it doesn't transform text, only the output)
        filters: {
            //This is a local filter
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        //The great thing about computed properties is that Vue knows on what such a 
        //property depends and therefore only recalculates it if something changes
        // computed: {
        //     //This computed property will only be recalculated wherever filterText or
        //     //fruits changes 
        //     filteredFruits(){
        //         return this.fruits.filter((element) => {
        //             return element.match(this.filterText);
        //         });
        //     }
        // }
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
