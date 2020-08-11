//New vue instance
new Vue({
    //Provide the Vue instance an existing DOM element to mount on. 
    //It can be a CSS selector string or an actual HTMLElement.
    el: '#app',
    //Quando uma instância Vue é criada, ela adiciona todas as propriedades 
    //encontradas no objeto data ao sistema de reatividade do Vue
    data: {
        title: 'Hello World!',
        greeting: 'Hi Vue',
        link: 'https://google.com',
        finishedLink: '<a href="https://google.com">Google</a>'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            this.greeting = 'Hello Vue';
            //Remember it has to be something that can be converted to a string)
            return this.greeting; 
        }
    }
});