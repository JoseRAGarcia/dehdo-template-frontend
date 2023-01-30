export const state = () => ({
    showMenuMobile: false,
})

export const mutations = {
    SET_SHOW_MENU_MOBILE(state, status) {
        state.showMenuMobile = status
    }

}

export const getters = {
    getShowMenuMobile(state) {
        return state.showMenuMobile
    }
}

export const actions = {
    changeShowMenuMobile({ commit }, status) {
        commit('SET_SHOW_MENU_MOBILE', status)
    }

}
