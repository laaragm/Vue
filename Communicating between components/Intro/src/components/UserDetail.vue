<!-- Remember that objects and Arrays are reference types, which means they only exist
in memory once and the variables are properties "storing" them actually only store a 
pointer to the place in memory -->

<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="resetName">Reset the name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        //In order to transfer data from the parent to the child we use something
        //called props (property set from outside - from the parent)
        //We're passing a dynamic property 
        //Remember that the name inside props (in our case 'name') has to be the same we
        //passed using v-bind (dynamic concept).
        // props: ['name'],

        // You can also use it like an object in order to validate the type of content
        //you're receiving
        props: { 
            name: {
                type: String, //You can also accept multiple types like by writing it
                //like [String, Array]
                // required: true
            },
            age: Number
        },
        methods: {
            resetName() {
                this.name = 'Lara';
                //This emits an event so we're telling the parent component that the
                //name was changed
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            //This will now listen to events emitted on the eventBus Vue instance 
            //This is how you can communicate between children without having to
            //take the route using the parent
            // eventBus.$on('ageWasEdited', (age) => {
            //     this.age = age;
            // });

            eventBus.changeAge(this.age)
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
