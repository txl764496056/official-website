<template>
  <div id="app">
    <!-- 顶部topbar -->
    <top-bar></top-bar>
    <!-- 导航栏 -->
    <navigation-bar></navigation-bar>
    <router-view/>
       
  </div>
</template>

<script>

import navigationBar from "./components/navigation-bar" //导航
import topBar from "./components/top-bar" //顶部导航

export default {
  name: 'App',
  data:function(){
      return {
        
      }
  },
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar
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
</style>
