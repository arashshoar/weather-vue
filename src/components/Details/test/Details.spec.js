import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

import Details from '../Details'
import store from '../../../store/index'

Vue.use(Vuex)

describe('When we are testing the Details component', () => {
  const wrapper = mount(Details, {
    data() {
      return {
        styles: {
          details: 'details',
          borderBottom: 'borderBottom',
          detailsIconContainer: 'detailsIconContainer',
          detailsIcon: 'detailsIcon',
          detailsTable: 'detailsTable',
          cell: 'cell',
          noBorders: 'noBorders',
          detailsReport: 'detailsReport',
        }
      }
    },
    store
  })

  it('should contains a details element', () => {
    expect(wrapper.findAll('.details')).toHaveLength(1)
  })

  it('should contains a borderBottom element', () => {
    expect(wrapper.findAll('.borderBottom')).toHaveLength(1)
  })

  it('should contains a image element', () => {
    expect(wrapper.findAll('img')).toHaveLength(1)
  })

  it('should contains a detailsTable element', () => {
    expect(wrapper.findAll('.detailsTable')).toHaveLength(1)
  })

  it('should contains 4 cell element', () => {
    expect(wrapper.findAll('.cell')).toHaveLength(4)
  })

  it('should contains a detailsReport', () => {
    expect(wrapper.findAll('.detailsReport')).toHaveLength(1)
  })

  it('detailsReport element has contains 2 div element', () => {
    expect(wrapper.findAll('.detailsReport').at(0).findAll('div')).toHaveLength(3)
  })

})

