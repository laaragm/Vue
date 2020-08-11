new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.isRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.turns = []
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            //unshift is the opposite of push; it basically inserts the element
            //in the first position of the array
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin())
                return;
            
            this.monsterAttacks(5, 12);
        },
        specialAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });
            if (this.checkWin())
                return;
            
            this.monsterAttacks(8, 18);
        },
        heal: function(){
            this.playerHealth >= 90 ? this.playerHealth = 100 : this.playerHealth += 10; 
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            if (this.checkWin())
                return;
            
            this.monsterAttacks(3, 10);
        }, 
        giveUp: function(){
            confirm('You lost! Wanna play again?') ? this.startGame() : this.isRunning = false;
        },
        monsterAttacks: function(min, max){
            var damage = this.calculateDamage(min, max);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0){
                if (confirm('You won! Wanna play again?')){
                    this.startGame();
                }else{
                    this.isRunning = false;
                }
                return true;
            }else if (this.playerHealth <= 0){
                if (confirm('You lost! Wanna play again?')){
                    this.startGame();
                }else{
                    this.isRunning = false;
                }
                return true;
            }
            
            return false;
        }
    }
})