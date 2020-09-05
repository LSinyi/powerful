import Vue from 'vue';
import Router from 'vue-router';
import home from './home';
import base from './base';
import errorPage from './errorPage';

Vue.use(Router);

export default new Router({
    routes: [
        home,
        base,
        errorPage
    ]
});
