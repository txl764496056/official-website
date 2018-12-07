import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompanyProfile from '@/views/company_profile' //企业简介
import Index from '@/views/index' //首页

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:"/company_profile",
      name:"company_profile",
      component:CompanyProfile
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:"/",
      redirect:"/index"
    }
  ]
})
