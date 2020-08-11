new Vue({
    el: '#exercise',
    data: {
        name: 'Lara',
        age: 20,
        image: 'vue.jpg'
    },
    methods: {
        generateRandomNumber: function() {
            return Math.random();
        }
    }
});