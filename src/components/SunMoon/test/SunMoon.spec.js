import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

import SunMoon from '../SunMoon'
import store from '../../../store/index'
import WeatherIcon from '../WeatherIcon'
import SunLocation from '../SunLocation'

Vue.use(Vuex)

const flushPromise = () => new Promise(resolve => setTimeout(resolve, 0))


describe('When we are testing the SunMoon component', () => {

  const wrapper = mount(SunMoon, {
    data() {
      return {
        styles: {
          sunMoon: 'sunMoon',
          tableContainer: 'tableContainer',
        }
      }
    },
    store
  })

  it('before data loaded tableContainer should shows loading in each cell', () => {
    const tableContainer = wrapper.findAll('.tableContainer').at(0).findAll('div')
    expect(tableContainer.at(1).text()).toEqual('Sun Rise: loading')
    expect(tableContainer.at(2).text()).toEqual('Sun Set: loading')
    expect(tableContainer.at(3).text()).toEqual('Sun Hours: loading')
  })

  it('should contains an instance of Weather icon if it is night', () => {
    expect(wrapper.findAllComponents(WeatherIcon)).toHaveLength(1)
  })

  it('should contains an instance of Weather icon if it is day', async () => {
    const currentWeatherData = store.state.currentWeatherData.currentWeatherData
    const changToDay = {
      sys: {
        sunrise: '1611501390',
        sunset: '1611537806',
      },
      dt: '1611504929',
      timezone: '-28800'
    }
    Object.assign(currentWeatherData, changToDay)

    await flushPromise()
    expect(wrapper.findAllComponents(SunLocation)).toHaveLength(1)
  })

  it('after data loaded tableContainer should shows correct data about Sun Rise, Sun Set and Sun Hours', () => {
    const tableContainer = wrapper.findAll('.tableContainer').at(0).findAll('div')
    expect(tableContainer.at(1).text()).toEqual('Sun Rise: 7:16')
    expect(tableContainer.at(2).text()).toEqual('Sun Set: 17:23')
    expect(tableContainer.at(3).text()).toEqual('Sun Hours: 10.1')
  })
})
