// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import { remjs } from './common/js/rem'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'



Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
    loading: require('./common/image/timg.gif')
})

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastclick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})