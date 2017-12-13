<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>
<script>
export default{}
</script>
<style scoped lang="stylus">
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'

.m-header
  height:.88rem
  text-align :center
  color:$color-theme
  font-size:0
  .icon
    display :inline-block
    vertical-align :top
    margin :.12rem .18rem 0 0
    width:0.6rem
    height:0.64rem
    bg-image('logo')
    background-size:0.6rem 0.64rem
  .text
    display :inline-block
    vertical-align :top
    line-height :.88rem
    font-size:$font-size-large
</style>
