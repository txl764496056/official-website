<template>
  <div id="app">
    <!-- 顶部topbar -->
    <top-bar></top-bar>
    <!-- 导航栏 -->
    <navigation-bar></navigation-bar>
    <!-- 轮播 -->
    <banner-carousel>
      <carousel-item>
            <img src="./assets/home_img/banner3.jpg" alt="">
        </carousel-item>
        <carousel-item>
            <img src="./assets/home_img/banner1.jpg" alt="">
        </carousel-item>
        <carousel-item>
            <img src="./assets/home_img/banner2.jpg" alt="">
        </carousel-item>
        <carousel-item>
            <img src="./assets/home_img/banner3.jpg" alt="">
        </carousel-item>
         <carousel-item>
            <img src="./assets/home_img/banner1.jpg" alt="">
        </carousel-item>
    </banner-carousel>
    <router-view/>
       
  </div>
</template>

<script>

import navigationBar from "./components/navigation-bar" //导航
import topBar from "./components/top-bar" //顶部导航
import bannerCarousel from "./components/banner-carousel" //轮播
import carouselItem from "./components/carousel-item" //轮播项

export default {
  name: 'App',
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar,
    "banner-carousel":bannerCarousel,
    "carousel-item":carouselItem
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
</style>
