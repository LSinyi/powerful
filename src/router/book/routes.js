const book = () => import(/* webpackChunkName: 'book' */ './Book');

export default {
    path: '/book',
    component: book
};
