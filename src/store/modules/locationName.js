const state = {
  LocationName: {
    cityName: 'New York',
    countryName: 'United Stats',
  }
}

const getters = {
  getLocationName: state => state.LocationName
}

export const actions = {
  setLocationName: ({commit}, LocationName) => {
    commit('mutateLocationName', LocationName)
  }
}

const mutations = {
  mutateLocationName: (state, LocationName) => state.LocationName = LocationName
}

export default {
  state,
  getters,
  actions,
  mutations,
};
