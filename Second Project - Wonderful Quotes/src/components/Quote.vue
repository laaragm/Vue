<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <!-- A panel in bootstrap is a bordered box with some padding around its content.
        The .panel-default class is used to style the color of the panel -->
        <div class="panel panel-default">
            <!-- Panels are created with the .panel class, and content inside the panel
            has a .panel-body class -->
            <div class="panel-body quote">
                <!-- Slot is basically holding the place for the outside content which
                will be rendered -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //We need to be able to get the array of quotes from the outside
        props: ['quotes']
    }
</script>

<style>
    /*panel-body is a bootstrap class*/
    .panel-body{ 
        font-family: 'Arizonia', cursive;
        font-size: 20px;
        color: #6e6e6e;
    }

    .quote {
        /*The cursor property specifies the mouse cursor to be displayed when
        pointing over an element.*/
        cursor: pointer; /*The cursor is a pointer and indicates a link*/
    }

    .quote:hover{
        background-color: #DCDCDC;
    }
</style>