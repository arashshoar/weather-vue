import { mount } from '@vue/test-utils'

import PrecipitationCell from '../PrecipitationCell'

describe('When we are testing the PrecipitationCell component', () => {

  const wrapper = mount(PrecipitationCell, {
    data() {
      return {
        styles: {
          cell: 'cell',
        }
      }
    },
    propsData: {
      cellHeader: 'Noon',
      imgSrc: 'imgSournce',
      precipitation: '50%'
    }
  })

  it('should contains 3 div elements', () => {
    expect(wrapper.find('.cell').findAll('div div')).toHaveLength(3)
  })

  it('should contains a header element as Noon', () => {
    expect(wrapper.find('.cell').findAll('div div').at(0).text()).toEqual('Noon')
  })

  it('should contains an image elements', () => {
    expect(wrapper.find('.cell').findAll('div div img')).toHaveLength(1)
  })

  it('should contains a precipitation as 50%', () => {
    expect(wrapper.find('.cell').findAll('div div').at(2).text()).toEqual('50%')
  })
})
