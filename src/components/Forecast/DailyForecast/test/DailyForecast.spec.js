import { mount } from '@vue/test-utils'
import DailyForecast from '../DailyForecast'
import { forecastWeatherDataForAxios } from '../../../../utilities/test-utilities/forecastWeatherDataForAxios'

describe('When we are testing the DailyForecast component', () => {
  const wrapper = mount(DailyForecast, {
    data() {
      return {
        styles: {
          forecastRow: 'forecastRow',
          day: 'day',
          icons: 'icons',
        }
      }
    },
    propsData: {
      daily: forecastWeatherDataForAxios.data.daily,
      timeZone: forecastWeatherDataForAxios.data.timezone_offset,
      unitFC: 'f'
    }
  })

  it('should contains at least one forecastRow container element with these mocked data 2', () => {
    expect(wrapper.findAll('.forecastRow')).toHaveLength(2)
  })

  it('should contains at least one day element with these mocked data 2', () => {
    expect(wrapper.findAll('.day')).toHaveLength(2)
  })

  it('should contains at least two image element with these mocked data 4', () => {
    expect(wrapper.findAll('img')).toHaveLength(4)
  })

  it('should contains at least two element to show the day\'s temperature with these mocked data 4', () => {
    expect(wrapper.findAll('.icons div')).toHaveLength(4)
  })

})
