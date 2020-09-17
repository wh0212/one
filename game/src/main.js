// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preload: 1.3,
  error: 'common/image/loading.gif',
  loading: 'common/image/loading.gif',
  attempt: 1
})

/* eslint-disable no-counsel */
let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.use({
  vm
})
