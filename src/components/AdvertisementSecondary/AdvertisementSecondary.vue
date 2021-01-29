<template>
  <div>
    <AddSecondaryItem :img="reduxImgSrc" ></AddSecondaryItem>
    <AddSecondaryItem :img="tddImgSrc" ></AddSecondaryItem>
    <AddSecondaryItem :img="functionImgSrc" ></AddSecondaryItem>
  </div>
</template>

<script>
import AddSecondaryItem from './AddSecondaryItem/AddSecondaryItem'
import functionImgSrc from '@/assets/images/Functiona.png'
import reduxImgSrc from '@/assets/images/Redux-Saga.png'
import tddImgSrc from '@/assets/images/TDD-Secondary.jpg'

export default {
  name: 'AdvertisementSecondary',
  components: { AddSecondaryItem },
  data() {
    return {
      reduxImgSrc,
      functionImgSrc,
      tddImgSrc,
    }
  }
}
</script>
