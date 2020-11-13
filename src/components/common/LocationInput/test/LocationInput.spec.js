import LocationInput from '../LocationInput'
import { mount } from '@vue/test-utils'

describe('When we are testing LocationInput component', () => {

  let wrapper = mount(LocationInput)
  const flushPromise = () => new Promise(resolve => setTimeout(resolve, 0))

  it('It should have a proper structure', async () => {
    await flushPromise()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
