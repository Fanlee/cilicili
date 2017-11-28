// 增强ES6 api
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动浏览器会有大约 300 毫秒的等待时间
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
