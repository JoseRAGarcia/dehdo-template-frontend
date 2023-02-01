export const state = () => ({
    showMenuMobile: false,
    adminMenuCollapsed: false,
})

export const mutations = {
    SET_SHOW_MENU_MOBILE(state, status) {
        state.showMenuMobile = status
    },
    SET_ADMIN_MENU_COLLAPSED(state, status) {
        state.adminMenuCollapsed = status
    },
}

export const getters = {
    getShowMenuMobile(state) {
        return state.showMenuMobile
    },
    getAdminMenuCollapsed(state) {
        return state.adminMenuCollapsed
    },
}

export const actions = {
    changeShowMenuMobile({ commit }, status) {
        commit('SET_SHOW_MENU_MOBILE', status)
    },
    changeAdminMenuCollapsed({ commit }, status) {
        commit('SET_ADMIN_MENU_COLLAPSED', status)
    },
}
