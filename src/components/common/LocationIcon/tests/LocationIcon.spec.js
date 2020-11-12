import LocationIcon from '../LocationIcon'
import { mount } from '@vue/test-utils'

describe("HelloWorld.vue", () => {

  const wrapper = mount(LocationIcon, {
    propsData: {
      class: 'locationIcon'
    }
  })

  it("renders props.msg when passed", () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('svg')).toHaveLength(1)
    expect(wrapper.html().includes('class="locationIcon"')).toBe(true)
  });
});
