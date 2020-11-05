import Vuex from 'vuex';
import Vue from 'vue';

import coords from './modules/coords';
import unitFC from './modules/unitFC';
import mapData from './modules/mapData';
import currentWeatherData from './modules/currentWeatherData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coords,
    mapData,
    currentWeatherData,
    unitFC,
  }
});
