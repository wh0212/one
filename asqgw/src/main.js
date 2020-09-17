import Vue from 'vue'
import App from './App'
import router from './router'
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
import ElementUI from 'element-ui'
import axios from './axios'
import 'element-ui/lib/theme-chalk/index.css'
require('../static/css/reset.css')
require('../static/css/main.css')


Vue.config.productionTip = false
Vue.use(ElementUI)
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
Vue.component('myHeader', myHeader)
Vue.component('myFooter', myFooter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
/*if (module.hot) {
  module.hot.accept();
}*/

