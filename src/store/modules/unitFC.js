const state = {
  unitFC: 'initial'
}

const getters = {
  getUnitFC: state => state.unitFC
}

export const actions = {
  setUnitFC: ({commit}, unitFC) => {
    commit('mutateUnitFC', unitFC)
  }
}

const mutations = {
  mutateUnitFC: (state, unitFC) => state.unitFC = unitFC
}

export default {
  state,
  getters,
  actions,
  mutations,
}
