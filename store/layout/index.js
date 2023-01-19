export const state = () => ({
    scrollY: 0
})

export const mutations = {
    SET_SCROLL_Y(state, payload) {
        state.scrollY = payload
    }
}

export const getters = {
    getScrollY(state) {
        return state.scrollY
    }
}

export const actions = {
    changeScrollY({commit}, payload) {
        commit('SET_SCROLL_Y', payload)
    }
}
