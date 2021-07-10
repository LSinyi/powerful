export default {
    namespaced: true,
    state: {
        isMasking: false /* 全局遮罩 */
    },
    getters: {
        // isControl: state => state.initData.adminType === 'ctl', /* 是否為控端 */
    },
    actions: {
        setMaskStatus: ({ commit }, bool) => { commit('setMaskStatus', bool); }
    },
    mutations: {
        /* eslint-disable no-param-reassign */
        setMaskStatus: (state, bool) => { state.isMasking = bool; }
    }
};
