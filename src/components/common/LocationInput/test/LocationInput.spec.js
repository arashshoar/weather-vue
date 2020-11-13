import LocationInput from '../LocationInput'
import { mount } from '@vue/test-utils'
import { fetchMapData } from '../../../../api/api'

jest.mock('../../../../api/api', () => {
  const rest = jest.requireActual('../../../../api/api')
  return {
    ...rest,
    fetchMapData: jest.fn()
      .mockResolvedValueOnce({data: 'mapData'})
      .mockResolvedValueOnce({data: {features: [{center: [100, 50]}]}})
  }
})

describe('When we are testing LocationInput component', () => {

  let wrapper = mount(LocationInput)
  const flushPromise = () => new Promise(resolve => setTimeout(resolve, 0))
  wrapper.vm.$store = {
    dispatch: jest.fn(fn => fn)
  }

  it('It should have a proper structure', async () => {
    await flushPromise()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('When input has to be empty at first', () => {
    expect(wrapper.vm.locationNameInput).toBe("")
  })

  it('When input value is changed the data locationNameInput is changed as well', () => {
    wrapper.find('input').setValue('San Jose')
    expect(wrapper.vm.locationNameInput).toBe("San Jose")
  })

  it('When input entered it fetch mapData for store', () => {
    wrapper.find('input').setValue('Seattle')
    wrapper.find('input').trigger('keydown.enter')
    expect(fetchMapData).toHaveBeenCalledWith({locationName: 'Seattle'})
  })

  it('When search button is clicked, it fetch mapData for store', () => {
    wrapper.find('input').setValue('Minneapolis')
    wrapper.find('button').trigger('click')
    expect(fetchMapData).toHaveBeenCalledWith({locationName: 'Minneapolis'})
  })
})
