const productBook = () => import(/* webpackChunkName: 'productBook' */ './ProductBook');

export default {
    path: '/productBook',
    component: productBook
};
