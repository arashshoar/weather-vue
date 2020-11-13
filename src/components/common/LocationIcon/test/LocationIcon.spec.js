import LocationIcon from '../LocationIcon'
import { mount } from '@vue/test-utils'

describe("When we are testing LocationIcon component", () => {

  const wrapper = mount(LocationIcon, {
    propsData: {
      class: 'locationIcon'
    }
  })

  it("Has to have proper structure", () => {
    expect(wrapper.findAll('svg')).toHaveLength(1)
    expect(wrapper.findAll('path')).toHaveLength(1)
    expect(wrapper.html().includes('class="locationIcon"')).toBe(true)
  });
});
