import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './plugins/element.js'
import './assets/css/global.css'
// import './assets/css/fonts/iconfont.css'

// 导入富文本编辑器
// import VueQuillEditor from 'vue-quill-editor'

// 导入 NProgress 包对应的JS和CSS
import NProgress from 'nprogress'

import axios from 'axios'
// import VueAxios from 'vue-axios'

// 配置请求的跟路径
axios.defaults.baseURL = 'http://192.168.1.21:8080/'
// 在 request 拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  // console.log(config)
  NProgress.start()
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  config.headers.ContentType = 'application/x-www-form-urlencoded'
  // 在最后必须 return config
  return config
})
// 在 response 拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
