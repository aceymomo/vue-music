<template>
  <div id="app">
    <M-header></M-header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'app',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  font-size:$font-size-small-s
  .swiper-pagination-bullet
    background :$color-text-l
  .swiper-pagination-bullet-active
    width:.4rem
    border-radius:.1rem
    background :$color-text-ll
</style>
