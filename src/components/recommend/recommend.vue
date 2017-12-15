<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="banner in recommends" :key="banner.url">
            <a :href="banner.linkUrl">
              <img :src="banner.picUrl">
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommend} from '@/api/recommend'
import {ERR_OK} from '@/api/config'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default{
  data(){
    return{
      recommends:[],
      recom:[
        {
          linkUrl	:	'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=3766873&g_f=shoujijiaodian',
		
          picUrl	:	'http://y.gtimg.cn/music/photo_new/T003R720x288M000000B8wHB1Si6Iz.jpg',
              
          id	:	13398

        },
        {
          linkUrl	:	'http://y.qq.com/m/act/sfhd/112.html?ADTAG=banner',
		
          picUrl	:	'http://y.gtimg.cn/music/photo_new/T003R720x288M000002r04yZ1psc63.jpg',
              
          id	:	13417

        },
        {
          linkUrl	:	'https://y.qq.com/m/act/chinaband/v3/index.html?ADTAG=jiaodiantu',
		
          picUrl	:	'http://y.gtimg.cn/music/photo_new/T003R720x288M0000009VBce0FIaCz.jpg',
              
          id	:	13372

        },
        {
          linkUrl	:	'https://y.qq.com/m/act/sfhd/113.html',
		
          picUrl	:	'http://y.gtimg.cn/music/photo_new/T003R720x288M000003wQACJ0nIvwe.jpg',
              
          id	:	13422

        },
        {
          linkUrl	:	'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=426303',
              
          picUrl	:	'http://y.gtimg.cn/music/photo_new/T003R720x288M000003ZY2ys3b5RFT.jpg',
              
          id	:	13356

        },
      ],
      swiperOption: {}
    }
  },
  created(){
    this._getRecommend()
  },
  methods:{
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          this.swiperOption = {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,
            speed: 400,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
          }
        }
      })
    },
  },
  components:{
    swiper,
    swiperSlide
  }
}
</script>
<style scoped lang="stylus">
@import '../../common/stylus/variable.styl'
.recommend
  width:100%
  .recommend-content
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
</style>
