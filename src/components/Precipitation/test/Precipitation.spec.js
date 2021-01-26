import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

import Precipitation from '../Precipitation'
import store from '../../../store/index'

import PrecipitationCell from '../PrecipitationCell/PrecipitationCell'

Vue.use(Vuex)

describe('When we are testing the SunMoon component', () => {

  const wrapper = mount(Precipitation, {
    data() {
      return {
        styles: {
          precipitation: 'precipitation',
        }
      }
    },
    store
  })

  it('should renders precipitation element', () => {
    expect(wrapper.findAll('.precipitation')).toHaveLength(1)
  })

  it('should have 4 instances of PrecipitationCell component', () => {
    expect(wrapper.findAllComponents(PrecipitationCell)).toHaveLength(4)
  })

})
