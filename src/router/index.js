import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompanyProfile from '@/views/company_profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:"/company_profile",
      name:"company_profile",
      component:CompanyProfile
    }
  ]
})
