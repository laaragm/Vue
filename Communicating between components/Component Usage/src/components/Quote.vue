<!-- The styling is set up on the child component, everything else is handled on the
parent component. This scope of compilation compared to the styling scope is important
to keep in mind -->

<template>
    <div>
        <!-- Slot allows us to pass in data from outside and render it in the 
        child component -->
        <div class="title">
            <slot name="title"></slot>   
            <span style="color: #ccc"><slot name="subtitle">The subtitle</slot></span> 
        </div>
        <hr>
        <div>
            <slot></slot>    
        </div>
    </div>
</template>

<script>
    export default { 

    }   
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2{
        color: blueviolet
    }

    .title{
        font-style: italic;
    }
</style>