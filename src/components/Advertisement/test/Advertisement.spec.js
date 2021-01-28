import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Advertisement from '../Advertisement'
import GadgetContainer from '../../common/GadgetContainer/GadgetContainer'
import Links from '../../common/Links/Links'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

describe('When we are testing the SunMoon component', () => {

  const wrapper = mount(Advertisement)

  it('should contains a aside element', () => {
    expect(wrapper.findAllComponents(GadgetContainer)).toHaveLength(1)
  })

  it('should contains a aside element', () => {
    expect(wrapper.findAllComponents(Links)).toHaveLength(1)
  })
})
