import Wind from '../Wind'
import { mount } from '@vue/test-utils'
import WindGen from '../WindGen/WindGen'

import store from '../../../store/index'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

describe('When we are testing the Wind component', () => {

  const wrapper = mount(Wind,{
    data() {
      return {
        styles: {
          windContainer: 'windContainer',
          smallGen: 'smallGen',
          bigGen: 'bigGen',
          pressure: 'pressure',
          wind: 'wind',
        }
      }
    },
    store
  })



  it('should have 2 instance of WindGen', () => {
    expect(wrapper.findAllComponents(WindGen)).toHaveLength(2)
  })

  it('should have a bigGen version of WindGen', () => {
    expect(wrapper.findAll('.bigGen')).toHaveLength(1)
  })

  it('should have a smallGen version of WindGen', () => {
    expect(wrapper.findAll('.smallGen')).toHaveLength(1)
  })

  it('should have a wind section', () => {
    expect(wrapper.find('.wind').findAll('div')).toHaveLength(3)
  })

  it('should have a pressure section', () => {
    expect(wrapper.find('.pressure').findAll('div')).toHaveLength(3)
  })
})



