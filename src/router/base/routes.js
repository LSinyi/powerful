const base = () => import(/* webpackChunkName: 'base' */ './Base');

export default {
    path: '/base/:component',
    component: base
};
