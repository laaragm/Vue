<!-- This file is a component -->

<!-- Component template should contain exactly one root element --> 
<!-- Wrap all your template code around one root element -->
<template>
    <!-- <div>
        <p>Server status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div> -->
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
</template>

<script>
    //Registering a component locally
    import ServerStatus from './ServerStatus.vue'
    export default {
        components: {
            'app-server-status': ServerStatus
        }
        // data: function() {
        //     return {
        //         status: 'Critical'
        //     }
        // },
        // methods: {
        //     //I can write it like this because it'll be compiled to ES6
        //     changeStatus() {
        //         this.status = 'Normal'
        //     }
        // }
    }
</script>