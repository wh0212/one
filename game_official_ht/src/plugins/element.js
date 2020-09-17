import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const { Message } = Element

Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Element)
