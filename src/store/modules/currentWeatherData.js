import { currentWeatherDataForAxios } from '../../utilities/test-utilities/currentWeatherDataForAxios.js'

const state = {
  currentWeatherData: currentWeatherDataForAxios.data
}

const getters = {
  getCurrentWeatherData: state => state.currentWeatherData
}

export const actions = {
  setCurrentWeatherData: ({commit}, currentWeatherData) => {
    commit('mutateCurrentWeatherData', currentWeatherData)
  }
}

const mutations = {
  mutateCurrentWeatherData: (state, currentWeatherData) => state.currentWeatherData = currentWeatherData
}

export default {
  state,
  getters,
  actions,
  mutations,
}
