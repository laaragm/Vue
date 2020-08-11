new Vue({
    el: '#app',
    data: {
        attachRed: false,
        attachPink: false,
        attachPurple: false,
        color: 'green',
        width: 100
    },
    computed: {
        divClasses: function(){
            return {
                red: this.attachRed,
                violet: !this.attachRed
            };
        },
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            } ;
        }
    }
});