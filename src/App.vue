<template>
  <div id="app">
    <M-header></M-header>
    <Tab></Tab>
    <router-view></router-view>
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
  text-align: center
  color: #2c3e50
  font-size:$font-size-small-s
</style>
