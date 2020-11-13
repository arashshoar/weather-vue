import DownArrowIcon from '../DownArrowIcon'
import { mount } from '@vue/test-utils'

describe('When we are testing DownArrowIcon', () => {
  let wrapper = mount(DownArrowIcon)

  it('I should have the proper ', () => {
    expect(wrapper.findAll('svg')).toHaveLength(1)
    expect(wrapper.findAll('path')).toHaveLength(2)
  })
})
