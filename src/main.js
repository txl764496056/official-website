// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import "babel-polyfill" //兼容包

import url from "./mockjs/url"
import "./mockjs/app-mock"

import {WOW} from "./mockjs/wow.min2"
new WOW({live: false}).init();

// elementui 组件
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import App from './App'
import router from './router'

import './css/animate.min.css'
import './css/base.css'
import "./assets/iconfont/iconfont.css"

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(url);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
