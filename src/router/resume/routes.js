const resume = () => import(/* webpackChunkName: 'resume' */ './Resume');

export default {
    path: '/resume',
    name: 'resume',
    component: resume
};
