import UpArrowIcon from '../UpArrowIcon'
import { mount } from '@vue/test-utils'

describe('When we are testing UpArrowIcon', () => {
  let wrapper = mount(UpArrowIcon)

  it('I should have the proper ', () => {
    expect(wrapper.findAll('svg')).toHaveLength(1)
    expect(wrapper.findAll('path')).toHaveLength(2)
  })
})
