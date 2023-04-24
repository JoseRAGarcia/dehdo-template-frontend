export const state = () => ({
    showModal: [],
})

export const mutations = {
    SET_SHOW_MODAL(state, idModal) {
        if (state.showModal.includes(idModal)) {
            state.showModal.splice(state.showModal.indexOf(idModal), 1)
        } else {
            state.showModal.push(idModal)
        }
    },
}

export const getters = {
    getShowModal(state) {
        return state.showModal
    },
}

export const actions = {
    changeShowModal({ commit }, idModal) {
        commit('SET_SHOW_MODAL', idModal)
    },
}