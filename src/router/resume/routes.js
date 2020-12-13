const resume = () => import(/* webpackChunkName: 'resume' */ './Resume');

export default {
    path: '/resume',
    component: resume
};
