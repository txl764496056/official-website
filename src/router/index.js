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
import viewDetails from "@/views/view_details" //详情页
import ProfileLayout from "@/views/profile_layout" //产业布局
import ProfileHonor from "@/views/profile_honor" //企业荣誉
import ProfileAnnounce from "@/views/profile_announce" //企业公告
import MallDetails from "@/views/mall_details" //商品详情
import Invite from "@/views/invite" //商品详情

Vue.use(Router)

export default new Router({
  routes: [
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
          path:"/profile_layout",
          name:"profile_layout",
          component:ProfileLayout,
          meta:{
            title:"产业布局"
          }
        },
        {
          path:"/profile_honor",
          name:"profile_honor",
          component:ProfileHonor,
          meta:{
            title:"企业荣誉"
          }
        },
        {
          path:"/profile_announce",
          component:ProfileAnnounce,
          meta:{
            title:"企业公告"
          },
          children:[
            {
              path:"/announce_details",
              name:"announce_details",
              component:viewDetails,
              meta:{
                title:"公告详情"
              }
            }
          ]
        },
        { 
          path:"/profile_culture",
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
              component:companyCulturePhotos,
              meta:{
                title:"企业文化照片墙"
              },
              children:[//------------------四级路由
                {
                  path:"/view_details",
                  name:"view_details",
                  component:viewDetails,
                  meta:{
                    title:"照片详情"
                  }
                }
              ]//四级路由-end
            }
          ]//三级路由-end
        }
      ]//二级路由-end
    },
    {
      path:"/news",
      component:News,
      meta:{
        title:"新闻资讯"
      },
      children:[
        {
          path:"/news_details",
          name:"news_details",
          component:viewDetails,
          meta:{
            title:"新闻详情"
          }
        }
      ]
    },
    {
      path:"/product_center",
      component:productCenter,
      meta:{
        title:"产品中心"
      },
      children:[
        {
          path:"/view_details2",
          name:"view_details2",
          component:viewDetails,
          meta:{
            title:"产品详情"
          }
        }
      ]
    },
    {
      path:"/mall",
      component:Mall,
      meta:{
        title:"商城"
      },
      children:[
        {
          path:"/mall_details",
          name:"mall_details",
          component:MallDetails,
          meta:{
            title:"商品详情"
          }
        }
      ]
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
      component:Contract,
      meta:{
        title:"联系我们"
      },
      children:[
          {
            path:"/invite",
            name:"invite",
            component:Invite,
            meta:{
              title:"招贤纳士"
            }
          }
        ]
    }
  ]
})
