import { mount } from '@vue/test-utils'

import Forecast from '../Forecast'
import store from '../../../store/index'
import HourlyForecast from '../HourlyForecast/HourlyForecast'
import DailyForecast from '../DailyForecast/DailyForecast'

describe('When we are testing the Forecast component', () => {
  const wrapper = mount(Forecast, {
    data() {
      return {
        styles: {
          forecast: 'forecast',
          dropDown: 'dropDown',
        }
      }
    },
    store
  })

  it('should contains a forecast container element', () => {
    expect(wrapper.findAll('.forecast')).toHaveLength(1)
  })

  it('should contains a dropDown element', () => {
    expect(wrapper.findAll('.dropDown')).toHaveLength(1)
  })

  it('should contains an instance of HourlyForecast component', () => {
    expect(wrapper.findAllComponents(HourlyForecast)).toHaveLength(1)
  })

  it('should contains an instance of DailyForecast component', () => {
    expect(wrapper.findAllComponents(DailyForecast)).toHaveLength(1)
  })

})
