export default {
    path: '/errorPage',
    component: (resolve) => {
        require.ensure(['./Main'], () => {
            resolve(require('./Main'));
        });
    }
};
