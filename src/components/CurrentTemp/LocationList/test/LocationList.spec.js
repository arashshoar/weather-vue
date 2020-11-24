import LocationList from '../LocationList'
import { mount } from '@vue/test-utils'
import store from '../../../../store/index'
import Vue from 'vue'
import Vuex from 'vuex'


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

  return {
    get: jest.fn()
      .mockResolvedValue(nextMapData)
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

  const wrapper = mount(LocationList, {
    data() {
      return {
        styles: {
          locationList: 'locationList',
          dropButton: 'dropButton',
          dropdownMenuLinks: 'dropdownMenuLinks',
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


  it('should have a locationList container', () => {
    expect(wrapper.findAll('.locationList')).toHaveLength(1)
  })

  it('should have a dropButton element', () => {
    expect(wrapper.findAll('.dropButton')).toHaveLength(1)
  })

  it('should have a dropdownMenuLinks element', () => {
    expect(wrapper.findAll('.dropdownMenuLinks')).toHaveLength(1)
  })

  it('When select a list item it should change the mapData', async () => {
    wrapper.findAll('a').at(0).trigger('click')
    await flushPromise()
    expect(wrapper.vm.$store.state.mapData.mapData).toEqual(nextMapData.data)
  })

})
