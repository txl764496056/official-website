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
import companyCulturePhotos from "@/views/company_culture_photos" //企业文化照片墙
import cultureIndex from "@/views/culture_index" //企业文化首页

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {// -------------------一级路由（企业简介）
      path:"/company_profile",
      // name:"company_profile", //当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
      component:CompanyProfile,
      meta:{
        title:"企业简介"
      },
      children:[//---------------二级路由
        { //企业简介首页
          path:"/profile_index",
          name:"profile_index",
          component:ProfileIndex
        },
        {
          path:"/",
          redirect:"/profile_index"
        },
        { 
          path:"/profile_culture",
          // name:"profile_culture",
          component:ProfileCulture,
          meta:{
            title:"企业文化"
          },
          children:[//------------------三级路由
            {
              path:"/culture_index",
              name:"culture_index",
              component:cultureIndex
            },
            {
              path:"/",
              redirect:"/culture_index"
            },
            {
              path:"/company_culture_photos",
              name:"company_culture_photos",
              component:companyCulturePhotos,
              meta:{
                title:"企业文化照片墙"
              }
            }
          ]
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta:{
        title:"首页"
      }
    },
    {
      path:"/",
      redirect:"/index"
    },
    {
      path:"/news",
      name:"news",
      component:News,
      meta:{
        title:"新闻资讯"
      }
    },
    {
      path:"/product_center",
      name:"product_center",
      component:productCenter,
      meta:{
        title:"产品中心"
      }
    },
    {
      path:"/mall",
      name:"mall",
      component:Mall,
      meta:{
        title:"商城"
      }
    },
    {
      path:"/download",
      name:"download",
      component:Download,
      meta:{
        title:"客户端下载"
      }
    },
    {
      path:"/contract",
      name:"contract",
      component:Contract,
      meta:{
        title:"联系我们"
      }
    }
  ]
})
