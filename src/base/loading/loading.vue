<template>
  <div class="loading">
    <img src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default{
    props:{
      title:{
        type:String,
        default:'正在输入...'
      }
    }
  }
</script> 
<style scoped lang="stylus">
.loading
  width:100%
  text-align :center
  img
    width:.48rem
    height:.48rem
  .desc
    line-height :.4rem
    font-size:.48rem
    color:rgba(255,255,255,0.5)
</style>
