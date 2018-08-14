// 路由的配置
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',                    
      name:'Home',   //路由名字
      component:Home //指第三行的Home
    },
    {
      path:'/city',                    
      name:'City',   //路由名字
      component:City //指第三行的Home
    },
  ]
})
