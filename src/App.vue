<template>
  <div id="app">
    <!-- 顶部topbar -->
    <top-bar></top-bar>
    <!-- 导航栏 -->
    <navigation-bar></navigation-bar>
    <!-- 轮播 -->
    <banner-carousel>
        <carousel-item v-for="(item,index) in bannerImg" :key="index">
            <img :src="item" alt="">
        </carousel-item>
    </banner-carousel>
    
    <div class="container">
      <!-- 包年电话 -->
      <ad-item></ad-item>
      <!--  丰富人脉 -->
      <ad-item>
        <template slot="ad-l">
            <img src="/static/home_img/card.png" alt="">
        </template>
        <template slot="ad-r">
            <h2>开拓丰富人脉</h2>
            <p>主要以名片形式来获取组成自己的人脉</p>
            <p>是商务人士必备的领域</p>
            <p>快速积累人脉，通过精准定位</p>
            <p>实现您人脉资源无限化</p>
        </template>
      </ad-item>
      <!--  全球直播 -->
      <ad-item>
        <template slot="ad-l">
          <h2>全球最干净直播</h2>
          <p>随时随地，想学就学，免费充电</p>
          <p>发出企业的声音</p>
        </template>
        <template slot="ad-r">
          <img src="/static/home_img/live.png" alt="">
        </template>
      </ad-item>
    </div>
    <!-- 卡片轮播 -->
    <div class="expert-team">
		  <div class="container wow animated zoomIn">
          <h2>来自企业一线的资深技术专家团队</h2>
		  	  <h3>我们拥有前沿专业视野、国际化资深团队、出色的创意能力及执行力、不断拓展设计服务的内涵与外延</h3>
          <div class="epxert-box">
            <el-carousel :interval="4000" type="card" height="500px">
              <el-carousel-item v-for="item in 3" :key="item">dfdfdsfds
                  <div class="card-item">
                    <img src="/static/home_img/a2.png" alt="">
                    <h2>杨体春</h2>
                    <span>YANG TI CHUN</span>
                    <p>汇能科技创始人兼CEO</p>
                    <div class="personal-details">
                      <p>
                        1创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工部副秘书长兼副部长，创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工部副秘书长兼副部长，创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工人。
                      </p>
                    </div>
                  </div>
              </el-carousel-item>
            </el-carousel>
          </div>
		  </div>
    </div>
    <router-view/>
       
  </div>
</template>

<script>

import navigationBar from "./components/navigation-bar" //导航
import topBar from "./components/top-bar" //顶部导航
import bannerCarousel from "./components/banner-carousel" //轮播
import carouselItem from "./components/carousel-item" //轮播项
import adItem from './components/ad-item' 

export default {
  name: 'App',
  data:function(){
      return {
        bannerImg:["/static/home_img/banner1.jpg","/static/home_img/banner2.jpg","/static/home_img/banner3.jpg"]
      }
  },
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar,
    "banner-carousel":bannerCarousel,
    "carousel-item":carouselItem,
    "ad-item":adItem
  },
  mounted:function(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
table tr{border:1px solid #000;}
/* 卡片轮播 */
.expert-team{background: url(/static/home_img/team_bg.jpg) center top no-repeat;padding-top: 50px;padding-bottom: 10px;background-color:#01497B;}
.expert-team h2{color:#fff;font-size: 30px;text-align: center;;font-weight: bold;}
.expert-team h3{color:#a4ccf5;font-size: 24px;text-align: center;margin-top: 20px;font-weight: normal;}

.card-item{width:450px;margin:0 auto;border-radius: 5px;background-color: #fff;text-align: center;font-weight: bold;font-size: 30px;list-style: none;text-align: center;border-radius: 8px;overflow:hidden;min-height: 480px;}
.card-item img{width:164px;height: 164px;border-radius: 50%;margin-top: 20px;transition:1s;}
.card-item h2{font-size: 24px;color:#333;margin-top: 15px;font-weight: normal;}
.card-item span{font-size: 16px;color:#333;text-transform:uppercase;font-weight:normal;display: block;margin-top: 8px;}
.card-item>p{color:#828a92;font-size: 24px;margin-top: 40px;font-weight: normal;}
.personal-details{background-color: #0099ff;border-radius: 0 0 8px 8px;margin-top: 20px; overflow:hidden; height: 0px;  }
.personal-details p{color:#fff;font-size: 16px;line-height:27px;text-indent: 2em;padding:15px 20px;font-weight:normal;text-align: justify;border-radius: 0 0 8px 8px;}
.card-item:hover img{border-radius: 50% 0 50% 0;border-bottom:4px solid rgba(0,153,255,1);}

.epxert-box{position: relative;margin:0 auto;height: 625px;margin-top: 65px;}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item.is-active{color:#ff0000}
</style>
