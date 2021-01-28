import { mount } from '@vue/test-utils'
import HourlyForecast from '../HourlyForecast'
import { forecastWeatherDataForAxios } from '../../../../utilities/test-utilities/forecastWeatherDataForAxios'

describe('When we are testing the HourlyForecast component', () => {
  const wrapper = mount(HourlyForecast, {
    data() {
      return {
        styles: {
          table: 'table',
          cell: 'cell',
        }
      }
    },
    propsData: {
      hourly: forecastWeatherDataForAxios.data.hourly,
      timeZone: forecastWeatherDataForAxios.data.timezone_offset,
      unitFC: 'f',
      sunRiz: forecastWeatherDataForAxios.data.current.sunrise,
      sunSet: forecastWeatherDataForAxios.data.current.sunset,
    }
  })

  it('should contains one table container element', () => {
    expect(wrapper.findAll('.table')).toHaveLength(1)
  })

  it('should contains at least one cell element with these mocked data 2', () => {
    expect(wrapper.findAll('.cell')).toHaveLength(2)
  })

  it('should contains at least one image element with these mocked data 2', () => {
    expect(wrapper.findAll('.cell img')).toHaveLength(2)
  })

  it('should contains at least one element shows the time', () => {
    expect(wrapper.findAll('.cell div').at(0).text()).toEqual('7 AM')
  })

  it('should contains at least one element shows the temperature', () => {
    expect(wrapper.findAll('.cell div').at(2).text()).toEqual('58°')
  })
})
