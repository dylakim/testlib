// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

const store = {
    state: {
        count: 0,
    },
    getters: {
        counter: state => state.count,
    },
    mutations: {
        increment (state) {
            state.count += 1;
        },
    },
};

export default store;