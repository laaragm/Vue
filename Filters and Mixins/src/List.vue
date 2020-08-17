<!-- For more complex transformations use a computed property(they are more performant).
Filters can be a nice solution but sometimes it's better to use computed properties -->

<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText" placeholder="Filter">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
