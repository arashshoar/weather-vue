const state = {
  coords: '-100,50'
}

const getters = {
  getCoords: state => state.coords
}

export const actions = {
  setCoords: ({commit}, coords) => {
    commit('mutateCoords', coords)
  }
}

const mutations = {
  mutateCoords: (state, coords) => state.coords = coords
}

export default {
  state,
  getters,
  actions,
  mutations,
}
