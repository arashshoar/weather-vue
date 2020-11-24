import LocationAndDate from '../LocationAndDate'
import { mount } from '@vue/test-utils'

describe('When we are testing the LocationAndDate component', () => {
  const wapper = mount(LocationAndDate, {
    data() {
      return {
        styles: {
          locationAndDate: 'locationAndDate',
          inTheName: 'inTheName',
          city: 'city',
          country: 'country',
          dateTime: 'dateTime',
        }
      }
    },
    propsData: {
      cityName: "New York",
      countryName: 'United State',
      date: '01/01/2021',
      time: '12:30'
    }
  })


  it('should have a locationAndDate container', () => {
    expect(wapper.findAll('.locationAndDate')).toHaveLength(1)
  })

  it('should have a inTheName element', () => {
    expect(wapper.findAll('.inTheName')).toHaveLength(1)
  })

  it('should have a city element', () => {
    expect(wapper.findAll('.city')).toHaveLength(1)
  })

  it('should have a city element', () => {
    expect(wapper.findAll('.city')).toHaveLength(1)
  })

  it('should have a country element', () => {
    expect(wapper.findAll('.country')).toHaveLength(1)
  })

  it('should have a dateTime element', () => {
    expect(wapper.findAll('.dateTime')).toHaveLength(1)
  })

  it('should shows the passed cityName props', () => {
    expect(wapper.text().match(/New York/gi)).toHaveLength(1)
  })

  it('should shows the passed countryName props', () => {
    expect(wapper.text().match(/United State/gi)).toHaveLength(1)
  })

  it('should shows the passed countryName props', () => {
    expect(wapper.text().match(/01\/01\/2021, 12:30/gi)).toHaveLength(1)
  })
})
