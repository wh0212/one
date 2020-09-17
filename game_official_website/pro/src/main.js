import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import Carousel3d from 'vue-carousel-3d'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'

import 'swiper/dist/css/swiper.css'
import axios from 'axios'
// 全局时间过滤器
import Moment from 'moment'
Vue.filter('converTime', (data, formatStr) => {
  return Moment(data).format(formatStr)
})
Vue.use(Carousel3d, VueAwesomeSwiper, VueVideoPlayer)

// 配置请求的跟路径
axios.defaults.baseURL = 'http://192.168.1.21:8080'

// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  config.headers.ContentType = 'application/x-www-form-urlencoded'
  // 在最后必须 return config
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  return config
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
