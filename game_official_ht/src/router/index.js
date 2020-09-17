import Vue from 'vue'
import VueRouter from 'vue-router'

import Errorinfo from '../views/Errorinfo'

const Login = () => import(/* webpackChunkName:"login_main_welcome" */ '../views/Login.vue')
const Main = () => import(/* webpackChunkName:"login_main_welcome" */ '../views/Main.vue')
const Welcome = () => import(/* webpackChunkName:"login_main_welcome" */ '../views/Welcome.vue')
// 文章
const Publish = () => import(/* webpackChunkName:"publish_main_edit" */ '../views/article/Publishe.vue')
const ArticleMain = () => import(/* webpackChunkName:"publish_main_edit" */ '../views/article/Main.vue')
const ArticleEdit = () => import(/* webpackChunkName:"publish_main_edit" */ '../views/article/Edit.vue')
// 卡牌
const Management = () => import(/* webpackChunkName:"management_cardadd_edit" */ '../views/card/Management.vue')
const CardAdd = () => import(/* webpackChunkName:"management_cardadd_edit" */ '../views/card/Add.vue')
const CardEdit = () => import(/* webpackChunkName:"management_cardadd_edit" */ '../views/card/Edit.vue')
// 游戏特色
const Features = () => import(/* webpackChunkName:"features_add_edit" */ '../views/game/Features.vue')
const GameAdd = () => import(/* webpackChunkName:"features_add_edit" */ '../views/game/Add.vue')
const GameEdit = () => import(/* webpackChunkName:"features_add_edit" */ '../views/game/Edit.vue')
// 视听
const Audiovisual = () => import(/* webpackChunkName:"audiovisual_add_wallparper" */ '../views/audiovisual/Audiovisual.vue')
const AudiovisualAdd = () => import(/* webpackChunkName:"audiovisual_add_wallparper" */ '../views/audiovisual/Add.vue')
const Wallparper = () => import(/* webpackChunkName:"audiovisual_add_wallparper" */ '../views/audiovisual/Wallparper.vue')
const EditAudiovisual = () => import(/* webpackChunkName:"editaudiovisual" */ '../views/audiovisual/Edit.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/main',
    component: Main,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      // 文章
      { path: '/article/main', component: ArticleMain },
      { path: '/article/publish', component: Publish },
      { path: '/article/edit', component: ArticleEdit },
      // 卡牌
      { path: '/card/management', component: Management },
      { path: '/card/add', component: CardAdd },
      { path: '/card/edit', component: CardEdit },
      // 游戏特色
      { path: '/features', component: Features },
      { path: '/game/add', component: GameAdd },
      { path: '/game/edit', component: GameEdit },
      // 视听
      { path: '/audiovisual', component: Audiovisual },
      { path: '/wallparper', component: Wallparper },
      { path: '/editaudiovisual', component: EditAudiovisual },
      { path: '/audiovisual/add', component: AudiovisualAdd }
    ]
  },
  { path: '*', component: Errorinfo }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 即将要进入的目标 路由对象
  // from  当前导航正要离开的路由
  // 确保要调用 next 方法，否则钩子就不会被 resolved
  if (to.path === '/login') return next()
  // 获取用户id
  const userIdStr = window.sessionStorage.getItem('userId')
  if (!userIdStr) return next('/login')
  next()
})

export default router
