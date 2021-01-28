import Vue from 'vue'
import { mount } from '@vue/test-utils'
import LinkItem from '../LinkItem'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faGithub)

describe('When we are testing the LinkItem component', () => {

  const wrapper = mount(LinkItem, {
    data() {
      return {
        styles: {
          linkItem: 'linkItem',
          tableContainer: 'tableContainer',
        }
      }
    },
    propsData: {
      icon: ['fab', 'github'],
      linkHref: 'https://somewebsit.com',
      linkText: 'Click Here',
      linkLine1: 'line1 description',
      linkLine2: 'line2 description',
    }
  })

  it('should contains a linkItem container', () => {
    expect(wrapper.findAll('.linkItem')).toHaveLength(1)
  })

  it('should contains an svg icon', () => {
    expect(wrapper.findAll('svg')).toHaveLength(1)
  })

  it('should contains a link tag', () => {
    expect(wrapper.findAll('a')).toHaveLength(1)
  })

  it('should contains two description section linkLine1 and LinkLine2', () => {
    expect(wrapper.findAll('.linkItem div')).toHaveLength(2)
  })
})
