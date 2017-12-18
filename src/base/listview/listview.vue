<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="group in data" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
  export default{
    props:{
      data:{
        type:Array,
        default:[]
      }
    },
    components:{
      Scroll
    }
  }
</script>
<style scoped lang="stylus">
@import '../../common/stylus/variable'
.listview
  width:100%
  height:100%
  overflow :hidden
  .list-group
    padding-bottom:.6rem
    font-size:0
    .list-group-title
      font-size:$font-size-small
      height:.6rem
      line-height :.6rem
      padding-left:.4rem
      background :$color-highlight-background
      color:$color-text-l
    .list-group-item
      padding:.4rem 0 0 .6rem
      display :flex
      align-items :center
      .avatar
        width:1rem
        height:1rem
        border-radius :50%
      .name
        margin-left:.4rem
        font-size:$font-size-medium
        color:$color-text-l
</style>
