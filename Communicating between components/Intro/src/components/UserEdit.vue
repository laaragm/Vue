<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        props: ['age'],
        methods: {
            editAge() {
                this.age = 22;
                this.$emit('ageWasEdited', this.age);
                eventBus.$emit('ageWasEdited', this.age)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
