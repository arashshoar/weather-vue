import Vue from 'vue'
import Vuex from 'vuex'

import LocationInput from '../LocationInput'
import { mount } from '@vue/test-utils'
import store from '../../../../store/index'
import { mapDataForAxios } from '../../../../utilities/test-utilities/mapDataForAxios'
import { currentWeatherDataForAxios } from '../../../../utilities/test-utilities/currentWeatherDataForAxios.js'

Vue.use(Vuex)

jest.mock('axios', () => {
  const nextMapData = {data: {features: [{center: [100, 50], place_type: ['New York']}]}}
  return {
    get: jest.fn()
      .mockResolvedValue(nextMapData)
  }
})

const flushPromise = () => new Promise(resolve => setTimeout(resolve, 0))
const nextMapData = {data: {features: [{center: [100, 50], place_type: ['New York']}]}}


describe('When we are testing LocationInput component', () => {

let wrapper = mount(LocationInput, {store})

  it('Check the first state of store the default store has to be populated', () => {
    expect(store.state.coords).toEqual({ "coords": "-100,50" })
    expect(wrapper.vm.$store.state.coords).toEqual({ "coords": "-100,50" })
    expect(store.state.locationName).toEqual({
      locationName: {
        cityName: "New York",
        countryName: "United Stats"
      }
    })
    expect(store.state.mapData.mapData).toEqual(mapDataForAxios.data)
    expect(store.state.unitFC.unitFC).toEqual('initial')
    expect(store.state.currentWeatherData.currentWeatherData).toEqual(currentWeatherDataForAxios.data)
  })

  it('When input entered it fetch mapData for store', async () => {
    await wrapper.find('input').setValue('Seattle')
    await wrapper.find('input').trigger('keydown.enter')
    await flushPromise()
    expect(wrapper.vm.$store.state.mapData.mapData).toEqual(nextMapData.data)
  })

  it('When search button is clicked, it fetch mapData for store', async () => {
    wrapper.find('input').setValue('Minneapolis')
    wrapper.find('button').trigger('click')
    await flushPromise()
    expect(wrapper.vm.$store.state.mapData.mapData).toEqual(nextMapData.data)
  })
})

