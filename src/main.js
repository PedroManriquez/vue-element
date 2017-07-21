// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
// import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(locale)
Vue.use(ElementUI.Loading.directive)

Vue.prototype.$loading = ElementUI.Loading.service
Vue.prototype.$msgbox = ElementUI.MessageBox
Vue.prototype.$alert = ElementUI.MessageBox.alert
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$prompt = ElementUI.MessageBox.prompt
Vue.prototype.$notify = ElementUI.Notification
Vue.prototype.$message = ElementUI.Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
