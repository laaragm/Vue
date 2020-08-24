//Vuex is a state management pattern + library for Vue.js applications. It serves as a 
//centralized store for all the components in an application, with rules ensuring that 
//the state can only be mutated in a predictable fashion. 

import stocks from '../../data/stocks';

//Vuex uses a single state tree - that is, this single object contains all your 
//application level state and serves as the "single source of truth."
const state = {
    stocks: []
};

//Managing the state

//Mutations: The only way to actually change state in a Vuex store is by committing a 
//mutation. Vuex mutations are very similar to events: each mutation has a string type 
//and a handler. The handler function is where we perform actual state modifications.
//You cannot directly call a mutation handler. Think of it more like event registration:
//"When a mutation with type increment is triggered, call this handler." To invoke a 
//mutation handler, you need to call store.commit with its type.
//You can pass an additional argument to store.commit, which is called the payload 
//for the mutation
const mutations = {
    //We get new stocks passed as an argument and we want to edit our existing state
    //by overwriting the stocks there
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

//Actions: Actions are similar to mutations, the differences being that:
// - Instead of mutating the state, actions commit mutations.
// - Actions can contain arbitrary asynchronous operations.
//Action handlers receive a context object which exposes the same set of 
//methods/properties on the store instance, so you can call context.commit to commit 
//a mutation, or access the state and getters via context.state and context.getters. 
//We can even call other actions with context.dispatch
const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    //initStocks is only called when we once we initialize the stocks
    initStocks: ({ commit }) => {
        //stocks are the stocks from the data file and they are going to be used to 
        //initialize the application
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

//Getters: Vuex allows us to define "getters" in the store. You can think of them as 
//computed properties for stores. Like computed properties, a getter's result is cached 
//based on its dependencies, and will only re-evaluate when some of its dependencies 
//have changed.
const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
        mutations,
        actions,
        getters
};