new Vue({
    //Connect to DOM
    el: '#app',
    //Store data to be used
    data: {
        counter: 0,
        x: 0,
        y: 0,
        name: 'Lara',
        yahoo: 'https://br.yahoo.com/',
        google: 'https://google.com'
    },
    //Dependent properties
    //Everything stored in the computed can be used just like you use a 
    //property in the data object
    //With computed properties we are caching the result, we are not unnecessarily
    //recalculating it if there's no need to recalculate. 
    computed: {
        output: function(){
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    //Execute code upon data changes
    //Use watch if you need to run some other code which really is triggered when a
    //property updates and which is not solved by a computed property 
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000);
        }
    },
    //Methods of this vue instance
    methods: {
        increase: function(step, event){
            this.counter += step;
            //mouse event object
            console.log(event)
        },
        updateCoordinates: function(event){
            //clientX and clientY are the default properties names of the event object
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert('Alert!');
        },
        //Only use this if you know that you don't want to cache the result, that
        //you want to recalculate every time the DOM gets updated 
        result: function(){
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});