<template>
  <div id="app">
    <!-- 顶部topbar -->
    <top-bar></top-bar>
    <!-- 导航栏 -->
    <navigation-bar></navigation-bar>
    <router-view/>
    <!-- footer -->
    <bottom-footer></bottom-footer>
    <!-- 返回顶部按钮 -->
    <i @click="backTop()" class="iconfont icon-arrow-up back-top"></i>
  </div>
</template>

<script>

import navigationBar from "./components/navigation-bar" //导航
import topBar from "./components/top-bar" //顶部导航
import bottomFooter from "./components/bottom-footer" //底部

export default {
  name: 'App',
  data:function(){
      return {
        navlist:new Array()
      }
  },
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar,
    "bottom-footer":bottomFooter
  },
  mounted:function(){
  },
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
.back-top{position:fixed;right:30px;bottom:100px;font-size:30px;color:#fff;display: inline-block;width:50px;height:50px;background-color:#0099ff;line-height:50px;text-align:center;border-radius:5px;}
</style>
