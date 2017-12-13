<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default{}
</script>
<style scoped lang="stylus">
@import "../../common/stylus/variable"
.tab
  display :flex
  height:.88rem
  line-height :.88rem
  .tab-item
    flex:1
    font-size:0
    .tab-link
      font-size:$font-size-medium
      color:$color-text-l
      padding-bottom:.1rem
    &.router-link-active
      .tab-link
        color:$color-theme
        border-bottom:2px solid $color-theme
</style>
