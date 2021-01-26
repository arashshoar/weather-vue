import { mount } from '@vue/test-utils'

import WeatherIcon from '../WeatherIcon/WeatherIcon'

describe('When we are testing the LocationAndDate component', () => {

  const wrapper = mount(WeatherIcon, {
    data() {
      return {
        styles: {
          moonIconContainer: 'moonIconContainer',
          svgContainer: 'svgContainer',
        }
      }
    },
    propsData: {
      sunRise: '1611501390',
      sunSet: '1611537806',
      dt: '1611504929',
      description: 'Clear',
    },
  })

  it('should contains an image', () => {
    expect(wrapper.findAll('img')).toHaveLength(1)
  })

  it('should contains a moonIconContainer element', () => {
    expect(wrapper.findAll('.moonIconContainer')).toHaveLength(1)
  })

})
