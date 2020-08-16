<template>
    <div>
        <div 
            id="on"
            @click="switched(true)"
            :class="{active: value}"
        >
            On
        </div>
        <div 
            id="off"
            @click="switched(false)"
            :class="{active: !value}"
        >
            Off
        </div>'
    </div>
</template>

<script>
    export default {
        //This component takes a prop of value and it emits an input event (it has to 
        //work with v-model)
        props: ['value'],
        methods: {
            switched(isOn) {
                this.$emit('input', isOn);
            }
        }
    }
</script>

<style scoped>
    #on, #off{
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active{
        background-color: lightgreen;
    }

    #off:hover, #off.active{
        background-color: lightcoral;
    }

</style>