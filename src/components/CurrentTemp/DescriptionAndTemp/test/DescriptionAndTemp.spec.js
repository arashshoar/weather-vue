import DescriptionAndTemp from '../DescriptionAndTemp'
import { mount } from '@vue/test-utils'

describe('When we are testing the LocationAndDate component', () => {
  const wrapper = mount(DescriptionAndTemp, {
    data() {
      return {
        styles: {
          descriptionAndTemp: 'descriptionAndTemp',
          description: 'description',
          minMax: 'minMax',
          tempAndUnits: 'tempAndUnits',
          temp: 'temp',
          units: 'units',
          celc: 'celc',
          notCurrent: 'notCurrent',
          faren: 'faren',
        }
      }
    },
    propsData: {
      description: "Overcast clouds",
      maxTemp: '14',
      minTemp: '1',
      currentTemp: '12',
      isDay: true,
      unitFC: 'f',
      setUnitFC: jest.fn(),
    }
  })

  it('should have a descriptionAndTemp container', () => {
    expect(wrapper.findAll('.descriptionAndTemp')).toHaveLength(1)
  })

  it('should have a description element', () => {
    expect(wrapper.findAll('.description')).toHaveLength(1)
  })

  it('should shows the passed description props', () => {
    expect(wrapper.text().match(/Overcast clouds/gi)).toHaveLength(1)
  })

  it('should have a minMax, maxTemp and minTemp element', () => {
    expect(wrapper.findAll('.minMax')).toHaveLength(1)
  })

  it('should shows the passed minTep and maxTemp props', () => {
    expect(wrapper.text().match(/1°/gi)).toHaveLength(1)
    expect(wrapper.text().match(/14°/gi)).toHaveLength(1)
  })

  it('should change the unitFC to celcius when user click on the c link', () => {
    const celcLink = wrapper.find('.celc')
    celcLink.trigger('click')
    expect(wrapper.findAll('.celc.notCurrent')).toHaveLength(1)
    expect(wrapper.findAll('.faren.notCurrent')).not.toHaveLength(1)
    expect(wrapper.vm.setUnitFC).toHaveBeenCalledWith('c')
  })

  it('should change the unitFC to farenheit when user click on the f link', () => {
    jest.clearAllMocks()
    wrapper.setProps({unitFC: 'c'})
    const farenLink = wrapper.find('.faren')
    farenLink.trigger('click')
    expect(wrapper.vm.setUnitFC).toHaveBeenCalledWith('f')
  })

})
