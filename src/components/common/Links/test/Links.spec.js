import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Links from '../Links'
import LinkItem from '../../LinkItem/LinkItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)


describe('When we are testing the LinkItem component', () => {

  const wrapper = mount(Links, {
    data() {
      return {
        styles: {
          links: 'links',
        }
      }
    },
  })

  it('should contains a linkItem container', () => {
    expect(wrapper.findAll('.links')).toHaveLength(1)
  })

  it('should contains a linkItem container', () => {
    expect(wrapper.findAllComponents(LinkItem)).toHaveLength(6)
  })

})
