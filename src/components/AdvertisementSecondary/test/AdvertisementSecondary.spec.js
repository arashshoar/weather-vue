import { mount } from '@vue/test-utils'
import AdvertisementSecondary from '../AdvertisementSecondary'
import AddSecondaryItem from '../AddSecondaryItem/AddSecondaryItem'

describe('When we are testing the SunMoon component', () => {

  const wrapper = mount(AdvertisementSecondary, {
    data() {
      return {
        reduxImgSrc: 'reduxImgSrc',
        functionImgSrc: 'functionImgSrc',
        tddImgSrc: 'tddImgSrc',
      }
    },
  })

  it('should contains three instances of AddSecondaryItem component ', () => {
    expect(wrapper.findAllComponents(AddSecondaryItem)).toHaveLength(3)
  })
})


