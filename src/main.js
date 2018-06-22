// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'      
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'// 1px问题
import 'styles/iconfont.css'
import fastClick from 'fastclick'// 防止点击300ms延迟
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)   // 将fastClick绑定到body
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App:App },//定义了一个局部组件
  template: '<App/>'       //渲染APP这个局部组件，在第四行引入
})
