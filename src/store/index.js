import Vuex from 'vuex';
import Vue from 'vue';

import coords from './modules/coords';
import mapData from './modules/mapData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coords,
    mapData
  }
});
