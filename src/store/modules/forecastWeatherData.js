import { forecastWeatherDataForAxios } from '../../utilities/test-utilities/forecastWeatherDataForAxios.js'

const state = {
  forecastWeatherData: forecastWeatherDataForAxios.data
}

const getters = {
  getForecastWeatherData: state => state.forecastWeatherData
}

export const actions = {
  setForecastWeatherData: ({ commit }, forecastWeatherData) => {
    commit('mutateForecastWeatherData', forecastWeatherData)
  }
}

const mutations = {
  mutateForecastWeatherData: (state, forecastWeatherData) => state.forecastWeatherData = forecastWeatherData
}

export default {
  state,
  getters,
  actions,
  mutations,
}
