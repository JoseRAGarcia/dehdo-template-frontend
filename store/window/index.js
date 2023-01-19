export const state = () => ({
    windowWidth: null,
    xxl: false,
    xl: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
    isMobile: false,
    isTablet: false,
    isPhone: false,
})

export const mutations = {
    SET_WINDOW_WIDTH(state, payload) {
        state.windowWidth = payload        

        state.xxl = payload >= 1400;
        state.xl = payload < 1400;
        state.lg = payload < 1200;
        state.md = payload < 992;
        state.sm = payload < 768;
        state.xs = payload < 576;

        state.isMobile = payload < 1120; //md
        state.isTablet = payload < 768; //sm
        state.isPhone = payload < 576; //xs
    },

}

export const getters = {
    getBreakpoint(state) {
        return state
    },
    getWindowWidth(state) {
        return state.windowWidth
    },
    getIsMobile(state) {
        return state.isMobile
    },
}

export const actions = {
    changeWindowWidth({ commit }, payload) {
        commit('SET_WINDOW_WIDTH', payload)
    },
}
