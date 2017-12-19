<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div class="slider-wrapper">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="banner in recommends" :key="banner.url">
              <a :href="banner.linkUrl">
                <img class="needsclick" @load="loadImage" :src="banner.picUrl">
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="recom-wrapper" v-for="item in discList">
              <img v-lazy="item.imgurl">
              <div class="recom-text">
                <h3>{{item.creator.name}}</h3>
                <span>{{item.dissname}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>
<script>
import {getRecommend,getListcode} from '@/api/recommend'
import {ERR_OK} from '@/api/config'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Scroll from '@/base/scroll/scroll'
import Loading from '@/base/loading/loading'
import 'swiper/dist/css/swiper.css'
export default{
  data(){
    return{
      recommends:[],
      discList:[],
      swiperOption: {
        pagination:'.swiper-pagination',
        initialSlide :1,
        loop:true,
        speed: 400,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  created(){
    this._getRecommend()
    this._getListcode()
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  methods:{
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getListcode(){
      getListcode().then((res)=>{
        if(res.code === ERR_OK){
          this.discList = res.data.list
        }
      })
    }
  },
  components:{
    swiper,
    swiperSlide,
    Scroll,
    Loading
  }
}
</script>
<style scoped lang="stylus">
@import '../../common/stylus/variable.styl'
.recommend
  width:100%
  .recommend-content
    position: fixed
    width: 100%
    top: 1.76rem
    bottom: 0
    overflow :hidden
    .slider-wrapper
      width:100%
      overflow :hidden
      img
        display :block
        width:100%
    .recommend-list
      width:100%
      height:100%
      font-size:0
      .list-title
        font-size:$font-size-medium
        text-align :center
        color:$color-theme
        height:1.3rem
        line-height :1.3rem
      .recom-wrapper
        display :flex
        font-size:0
        margin:0 .4rem .45rem .4rem
        img
          display :block
          width:1.2rem
          height:1.2rem
        .recom-text
          flex:1
          display :flex
          flex-direction :column
          justify-content :center
          line-height :.46rem
          margin:$font-size-small-s 0 $font-size-small-s $font-size-large
          h3
            font-size:$font-size-medium-x
            color:$color-text
          span
            font-size:$font-size-medium
            color:$color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
