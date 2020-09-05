export default {
    path: '/base',
    component: (resolve) => {
        require.ensure(['./Main'], () => {
            resolve(require('./Main'));
        });
    }
};
