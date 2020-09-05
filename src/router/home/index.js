import about from './components/about';

export default {
    path: '/home',
    redirect: '/home/about',
    component: (resolve) => {
        require.ensure(['./Main'], () => {
            resolve(require('./Main'));
        });
    },
    children: [
        about
    ]
};
