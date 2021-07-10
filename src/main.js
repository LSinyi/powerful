import 'babel-polyfill';
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';

/* plugin */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import 'vue-awesome/icons';
// import Icon from 'vue-awesome/components/Icon';

// Vue.component('icon', Icon);

Vue.component('RouterView', Vue.component('router-view'));
Vue.component('RouterLink', Vue.component('router-link'));
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
