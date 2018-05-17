<template>
  <transition name="slide">
    <div class="singer-detail">

    </div>
  </transition>
  
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singerList'
import {ERR_OK} from '@/api/config'
  export default {
    data() {
      return {

      }

    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created () {
      this._getDetail()
    },
    methods:{
      _getDetail(){
        if(!this.singer.id){
          this.$router.push('/singer')
        }
        getSingerDetail(this.singer.id).then((res)=>{
          if(res.code === ERR_OK){
            console.log(res.data.list)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variable.styl'

.slide-enter-active,.slide-leave-active
  transition all .3s
.slide-enter,.slide-leave-to
  transform translate3d(100%,0,0)

.singer-detail
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  bottom 0
  background $color-background
</style>
