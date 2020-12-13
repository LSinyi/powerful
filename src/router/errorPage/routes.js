const errorPage = () => import(/* webpackChunkName: 'errorPage' */ './ErrorPage');

export default {
    path: '/errorPage',
    component: errorPage
};
