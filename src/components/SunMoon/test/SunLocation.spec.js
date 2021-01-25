import { mount } from '@vue/test-utils'

import SunLocation from '../SunLocation'

describe('When we are testing the SunLocation component', () => {
  const wrapper = mount(SunLocation, {
    data() {
      return {
        styles: {
          sunMoonContainer: 'sunMoonContainer',
          svgContainer: 'svgContainer',
          arcStroke: 'arcStroke',
          arcFill: 'arcFill',
          clearDayIcon: 'clearDayIcon',
          dotLeft: 'dotLeft',
          dotRight: 'dotRight',
          sunRise: 'sunRise',
          sunSet: 'sunSet',
        }
      }
    },
    propsData: {
      sunRiseTime: '7:16',
      sunSetTime: '17:22',
      baseMoveToLeft: '100',
    },
  })

  it('should has a sunMoonContainer elements', () => {
    expect(wrapper.findAll('.sunMoonContainer')).toHaveLength(1)
  })

  it('should contains 4 svg elements', () => {
    expect(wrapper.findAll('svg')).toHaveLength(4)
  })

  it('should contains 4 circle elements', () => {
    expect(wrapper.findAll('circle')).toHaveLength(4)
  })

  it('should shows sunRise time', () => {
    expect(wrapper.find('.sunRise').text()).toEqual('7:16')
  })

  it('should shows sunSet time', () => {
    expect(wrapper.find('.sunSet').text()).toEqual('17:22')
  })
})
