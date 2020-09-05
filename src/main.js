import 'babel-polyfill';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';

// import ElementUI from 'element-ui';
// import 'vue-awesome/icons';
// import Icon from 'vue-awesome/components/Icon';

// Vue.component('icon', Icon);
// Vue.use(ElementUI);

Vue.component('RouterView', Vue.component('router-view'));
Vue.component('RouterLink', Vue.component('router-link'));

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
