import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import book from './book';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        book
        // errorPage
    }
});
