import CurrentTemp from '../CurrentTemp'
import { mount } from '@vue/test-utils'
import store from '../../../store/index'
import Vue from 'vue'
import Vuex from 'vuex'
import LocationAndDate from '../LocationAndDate/LocationAndDate'
import LocationList from '../LocationList/LocationList'
import DescriptionAndTemp from '../DescriptionAndTemp/DescriptionAndTemp'


Vue.use(Vuex)

jest.mock('axios', () => {
  const nextMapData = {
    data: {features: [
        {
          center: [100, 50],
          place_type: ['New York'],
          place_name: 'City, San Jose'
        }
      ]
    }
  }

  const nextCurrentWetherData = {
    data: {
      main: {
        temp: 19,
        temp_max: 24,
        temp_min: 1,
      },
      dt: '',
      wind: {},
      sys: {},
      weather: [
        {
          description: 'smoke'
        },
        {
          description: 'Haze'
        }
      ]
    }
  }

  return {
    get: jest.fn()
      .mockResolvedValueOnce(nextMapData)
      .mockResolvedValue(nextCurrentWetherData)

  }
})

const flushPromise = () => new Promise(resolve => setTimeout(resolve, 0))

const nextMapData = {
  data: {features: [
      {
        center: [100, 50],
        place_type: ['New York'],
        place_name: 'City, San Jose'
      }
    ]
  }
}

describe('When we are testing the LocationAndDate component', () => {
  const wrapper = mount(CurrentTemp, {
    data() {
      return {
        styles: {
          currentTemp: 'currentTemp',
          tempHeader: 'tempHeader',
        }
      }
    },
    propsData: {
      getMapData: {
        features: [
          {
            id: '111',
            center: [-100, 50],
            text: 'San Jose',
            place_name: 'City, San Jose'
          }
        ]
      },
    },
    store
  })

  it('should have a currentTemp container', () => {
    expect(wrapper.findAll('.currentTemp')).toHaveLength(1)
  })

  it('should have a locationList element', () => {
    expect(wrapper.findAll('.tempHeader')).toHaveLength(1)
  })

  it('should have an instance of LocationAndDate ', () => {
    const locationAndDate = wrapper.findComponent(LocationAndDate)
    expect(locationAndDate.exists()).toBe(true)
  })

  it('should have an instance of LocationList ', () => {
    const locationList = wrapper.findComponent(LocationList)
    expect(locationList.exists()).toBe(true)
  })

  it('should have an instance of LocationList ', () => {
    const descriptionAndTemp = wrapper.findComponent(DescriptionAndTemp)
    expect(descriptionAndTemp.exists()).toBe(true)
  })

})
