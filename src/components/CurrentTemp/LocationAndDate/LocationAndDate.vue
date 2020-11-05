<template>
  <div>
    <div>In The Name of GOD</div>
    <div>{{cityName}}</div>
    <div>{{countryName}}</div>
    <div>{{date}}, {{time}}</div>
  </div>
</template>

<script>
export default {
  name: 'LocationAndDate',
  props: ['cityName', 'countryName', 'date', 'time'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
