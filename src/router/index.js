import Vue from 'vue';
import Router from 'vue-router';
import home from './home';
import errorPage from './errorPage';

Vue.use(Router);

export default new Router({
    routes: [
        home,
        errorPage
    ]
});
