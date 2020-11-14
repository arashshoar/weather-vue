const state = {
  locationName: {
    cityName: 'New York',
    countryName: 'United Stats',
  }
}

const getters = {
  getLocationName: state => state.locationName
}

export const actions = {
  setLocationName: ({commit}, locationName) => {
    commit('mutateLocationName', locationName)
  }
}

const mutations = {
  mutateLocationName: (state, locationName) => state.locationName = locationName
}

export default {
  state,
  getters,
  actions,
  mutations,
};
