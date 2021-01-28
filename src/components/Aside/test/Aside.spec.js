import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Aside from '../Aside'
import GadgetContainer from '../../common/GadgetContainer/GadgetContainer'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

describe('When we are testing the SunMoon component', () => {

  const wrapper = mount(Aside, {
    data() {
      return {
        styles: {
          aside: 'aside',
          tableContainer: 'tableContainer',
        }
      }
    },
  })

  it('should contains a aside element', () => {
    expect(wrapper.findAll('.aside')).toHaveLength(1)
  })

  it('should contains a aside element', () => {
    expect(wrapper.findAllComponents(GadgetContainer)).toHaveLength(1)
  })
})
