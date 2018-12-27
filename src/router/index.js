import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CompanyProfile from '@/views/company_profile' //企业简介
import Index from '@/views/index' //首页
import News from '@/views/news' //新闻
import productCenter from '@/views/product_center' //产品中心
import Mall from '@/views/mall' //商城
import Download from '@/views/download' //客户端下载
import Contract from '@/views/contract' //联系我们
import ProfileCulture from '@/views/profile_culture' //企业文化
import ProfileIndex from "@/views/profile_index" //企业简介首页

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {// 企业简介
      path:"/company_profile",
      // name:"company_profile", //当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
      component:CompanyProfile,
      children:[
        { //企业简介首页
          path:"/profile_index",
          name:"profile_index",
          component:ProfileIndex
        },
        {
          path:"/",
          redirect:"/profile_index"
        },
        { //企业文化
          path:"/profile_culture",
          name:"profile_culture",
          component:ProfileCulture,
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:"/",
      redirect:"/index"
    },
    {
      path:"/news",
      name:"news",
      component:News
    },
    {
      path:"/product_center",
      name:"product_center",
      component:productCenter
    },
    {
      path:"/mall",
      name:"mall",
      component:Mall
    },
    {
      path:"/download",
      name:"download",
      component:Download
    },
    {
      path:"/contract",
      name:"contract",
      component:Contract
    }
  ]
})
