const state = {
  coords: '-100,50'
}

const getters = {
  getCoords: state => state.coords
}

export const actions = {
  getUsersCoords: ({commit}, coords) => {
    commit('setCoords', coords)
  }
}

const mutations = {
  setCoords: (state, coords) => state.coords = coords
}

export default {
  state,
  getters,
  actions,
  mutations,
};
