<template>
  <div id="app">
    <top-bar></top-bar>
    <navigation-bar></navigation-bar>
    <router-link to="/company_profile">dddddddd</router-link>
    <router-view/>
  </div>
</template>

<script>
import navigationBar from "./components/navigation-bar"
import topBar from "./components/top-bar"
export default {
  name: 'App',
  components:{
    "navigation-bar":navigationBar,
    "top-bar":topBar
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
  margin-top: 60px;
}
</style>
