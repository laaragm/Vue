<!-- Component Communication: Unidirectional Data Flow 
If we want to reach out from one child to the other, that doesn't work because our
communication is unidirectional which means it only travels from parent to children
or from children to the parent, but not from a child to another child.
So instead we have to take the route that our parent gives us some method we can 
execute(pass callback as prop), when we execute this method provided by the parent(
use callback to pass data), it was provided via prop, this will run in the parent.
Alternatively, we would use a custom event to which the parent listened, listens (that
is also possible) and then the parent can pass(pass data as props) the updated data to 
the other child -->

<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- With v-bind (:) we're now referring to the name property in our data
                and we need the : to make dynamic. The name here has to be the same
                as the name we're setting up in the props array -->

                <!-- $event refers to the data which was passed through the event 
                and in this case we're passing the updated name here as data, and
                this is how we can pass data from the child to the parent -->
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name = $event"
                    :age="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :age="age" 
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data : function() {
            return {
                name: 'Lara',
                age: 20
            };
        },
        methods: {
            changeName() { //ES6 syntax
                this.name = 'Dani'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
