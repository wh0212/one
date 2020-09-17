import Vue from 'vue'
import VueRouter from 'vue-router'
// import mainjs from '@/mixins/main/Main.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
// -------- 主页 ---------
const Main = () =>
  import(/* webpackChunkName:"main_morenews_home" */ '../views/main/Main.vue')
// --------------首页------------------------
const Home = () =>
  import(/* webpackChunkName:"main_morenews_home" */ '../views/main/Home.vue')
// ------------------新闻资讯点击更多------------
const Morenews = () =>
  import(
    /* webpackChunkName:"main_morenews_home" */ '../views/main/Morenews.vue'
  )
const Newsdetail = () =>
  import(
    /* webpackChunkName:"newsdetail_morevideowallpaper" */ '../views/main/Newsdetail.vue'
  )
const morevideopaper = () =>
  import(
    /* webpackChunkName:"newsdetail_morevideowallpaper" */ '../views/main/Morevideowallpaper.vue'
  )
Vue.use(VueRouter, Carousel3d, Slide, swiper, swiperSlide, videoPlayer)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/main/home',
    children: [
      {
        path: '/more/news',
        component: Morenews
      },
      { path: '/main/home', component: Home },
      { path: '/main/detail', component: Newsdetail },
      { path: '/main/more', component: morevideopaper }
    ]
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   if()
//   next()
// })
export default router
