const home = () => import(/* webpackChunkName: 'home' */ './Home');
const about = () => import(/* webpackChunkName: 'home-about' */ './components/about/About');

export default {
    path: '/home',
    redirect: '/home/about',
    component: home,
    children: [{
        path: 'about',
        component: about
    }]
};
