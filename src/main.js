import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import BaseButton from './components/BaseButton.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
const testStore = new Vuex.Store(store);

new Vue({
    testStore,
    render: h => h(App),
}).$mount('#app');
  

export default {
    install (Vue, options) {
        console.log('Plugin installed...');
        
        if (!options || !options.store) {
            throw new Error('Please initialize plugin with a Vuex store');
        }

        options.store.registerModule('testLib', store);

        Vue.component('base-button', BaseButton);
    }
};