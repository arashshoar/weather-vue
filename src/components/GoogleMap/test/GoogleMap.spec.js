import { mount } from '@vue/test-utils'

import GoogleMap from '../GoogleMap'
import GadgetContainer from '../../common/GadgetContainer/GadgetContainer'

import store from '../../../store/index'

describe('When we are testing the SunMoon component', () => {
  const rootElement = document.createElement('div')
  rootElement.setAttribute('id', 'app')
  document.body.append(rootElement)


  const wrapper = mount(GoogleMap, {
    data() {
      return {
        styles: {
          googleMap: 'googleMap',
        }
      }
    },
    store
  })

  it('It should contains a GadgetContainer component', () => {
    expect(wrapper.findAllComponents(GadgetContainer)).toHaveLength(1)
  })

  it('It should contains a googleMap element', () => {
    expect(wrapper.findAll('.googleMap')).toHaveLength(1)
  })
})
