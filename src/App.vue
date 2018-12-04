<template>
  <div id="app">
    <!-- 顶部topbar -->
    <top-bar></top-bar>
    <!-- 导航栏 -->
    <navigation-bar></navigation-bar>
    <!-- 轮播 -->
    <banner-carosel></banner-carosel>
    <router-view/>
       
  </div>
</template>

<script>

import navigationBar from "./components/navigation-bar"
import topBar from "./components/top-bar"
import bannerCarosel from "./components/banner-carosel"

export default {
  name: 'App',
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar,
    "banner-carosel":bannerCarosel
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
