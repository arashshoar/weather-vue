import { mapDataForAxios } from '../../utilities/test-utilities/mapDataForAxios.js'

const state = {
  mapData: mapDataForAxios.data
}

const getters = {
  getMapData: state => state.mapData
}

export const actions = {
  setMapData: ({commit}, mapData) => {
    commit('mutateMapData', mapData)
  }
}

const mutations = {
  mutateMapData: (state, mapData) => state.mapData = mapData
}

export default {
  state,
  getters,
  actions,
  mutations,
};
