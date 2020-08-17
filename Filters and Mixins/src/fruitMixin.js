//The mixin is not shared, so each component which gets this as a mixin gets a fresh
//copy of this object. It's safe to access the data and manipulate it without affecting
//other places in your application. 
//If you want to affect other places in your application, consider simply using something
//like the event bus
export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
}

