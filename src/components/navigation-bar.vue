<template>
    <div id="navbar" class="navbar wow animated fadeInUp">
		<div class="container  clear">
			<div class="logo fl">
				<img class="fl" src="../assets/logo.png" alt="" />
				<p class="com-name fr">武汉星梦时代</p>
			</div>
			<ul id="navbar-nav" class="fr">
                <li v-for="(item,index) in navList" :key="index" @click="navClick" :class="{'active':activeIndex==index}">
                    <router-link :data-nav="item.name" :data-index="index" to="item.url">{{item.name}}</router-link>
                </li>
			</ul>
		</div>
		<div class="navbar-nav-list">
			<div class="container">
				<!-- 首页 子菜单 -->
				<!-- <ul class="nav-list hid nav-list0"></ul> -->
				<!-- 企业简介 子菜单 -->
				<!-- <ul class="nav-list hid nav-list1">
					<li>
						<a href="company_culture.html">
							<img src="../assets/home_img/nav_culture.png" alt="">
							<p>企业文化</p>
						</a>
					</li>
					<li>
						<a href="industrial_distribution.html">
							<img src="img/home_img/nav_Industrial.png" alt="">
							<p>产业布局</p>
						</a>
					</li>
					<li>
						<a href="certificate_honor.html">
							<img src="img/home_img/nav_my.png" alt="">
							<p>荣誉证书</p>
						</a>
					</li>
					<li>
						<a href="corporate_announcements.html">
							<img src="img/home_img/nav_affiche.png" alt="">
							<p>企业公告</p>
						</a>
					</li>
				</ul> -->
                <ul class="nav-list hid nav-list1">
                    <li v-for="(item,index) in navProfileList" :key="index">
                        <router-link to="item.url">
                            <img src="item.img" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </li>
                </ul>
				<!-- 产品中心 子菜单 -->
				<ul class="nav-list hid nav-list2">
					<li>
						<a href="product_center.html">
							<img src="img/home_img/nav_find.png" alt="">
							<p>发现</p>
						</a>
					</li>
					<li>
						<a href="product_center.html">
							<img src="img/home_img/nav_chat.png" alt="">
							<p>汇聊</p>
						</a>
					</li>
					<li>
						<a href="product_center.html">
							<img src="img/home_img/nav_call.png" alt="">
							<p>通讯</p>
						</a>
					</li>
					<li>
						<a href="product_center.html">
							<img src="img/home_img/nav_live.png" alt="">
							<p>直播</p>
						</a>
					</li>
					<li>
						<a href="product_center.html">
							<img src="img/home_img/nav_my.png" alt="">
							<p>我的</p>
						</a>
					</li>
				</ul>
				<!-- 新闻资讯 子菜单 -->
				<!-- <ul class="nav-list hid nav-list3"></ul> -->
				<!-- 商城 子菜单 -->
				<!-- <ul class="nav-list hid nav-list4"></ul> -->
				<!-- 客户端下载 子菜单 -->
				<!-- <ul class="nav-list hid nav-list5"></ul> -->
				<!-- 联系我们 子菜单 -->
				<ul class="nav-list hid nav-list6">
					<li>
						<a href="employ.html">
							<img src="img/home_img/nav_recruit.png" alt="">
							<p>招贤纳士</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    name:"navigation-bar",
    data:function(){
        return {
            activeIndex:0,
            navList:[
                {
                    name:"首页",
                    url:"/"
                },
                {
                    name:"企业简介",
                    url:"/company_profile"
                },
                {
                    name:"产品中心",
                    url:"/"
                },
                {
                    name:"商城",
                    url:"/"
                },
                {
                    name:"新闻资讯",
                    url:"/"
                },
                 {
                    name:"客户端下载",
                    url:"/"
                },
                 {
                    name:"联系我们",
                    url:"/"
                }
            ],
            navProfileList:[
                {
                    name:"企业文化",
                    img:"../assets/home_img/nav_culture.png",
                    url:"/"
                },
                {
                    name:"产业布局",
                    img:"../assets/home_img/nav_Industrial.png",
                    url:"/"
                },
                {
                    name:"荣誉证书",
                    img:"../assets/home_img/nav_my.png",
                    url:"/"
                },
                 {
                    name:"企业公告",
                    img:"../assets/home_img/nav_affiche.png",
                    url:"/"
                }
            ]
        }
    },
    methods:{
        /**
         * 导航动画
         */
        navAnimate(){
            let _this = this;
            var submenu = $(".navbar-nav-list"); //子菜单容器
            var str = "ul.nav-list"; //子菜单类名及类名前缀
            var specMenu;
            $("#navbar-nav li").hover(function(){
                var index = $(this).index(); //一级菜单索引
                specMenu = str+index; //指定子菜单类名
                var flag = submenu.has(specMenu).length; //判断是否有子菜单

                if(flag!=0){ //有子菜则单展开
                    $(specMenu).stop().slideDown().siblings().stop().slideUp();
                }else{
                    _this._slideUp("ul.nav-list"); //收起所有子菜单
                }
            });

            $("#navbar").on("mouseleave",function(){
                _this._slideUp("ul.nav-list"); //离开导航最顶层父元素，收起所有子菜单
            });
        },
        /**
         * 向上折叠隐藏元素 
         */
         _slideUp(element){
	        $(element).stop().slideUp("2000");
        },
         getEvent(evt){
	        return evt||window.event;
        },
        navClick(evt){
           this.activeIndex = evt.target.dataset.index;
        }
    },
    mounted:function(){
        this.navAnimate();
    }
}
</script>
<style scoped>
.logo{height:100px;line-height:100px;width:auto;}
.logo img{width:74px;height: 66px;margin-top:16px;}
.logo p.com-name{height:100px;line-height:inherit;font-size:26px;;color:#222;margin-left:20px;letter-spacing:3px;}
#navbar-nav{line-height: 100px;height: 100px;}
#navbar-nav>li{float:left;position: relative;overflow: hidden;}
#navbar-nav li a{display: inline-block;min-width: 114px;color:#333;font-size: 18px;text-align:center;position: relative;transition:all 0.6s;}
#navbar-nav li.active a{background-color:#0099ff;color:#fff;position: relative;}
#navbar-nav li:hover a{transform: translateY(-100px);}
#navbar-nav li a:after{content:attr(data-nav);display: inline-block;height: 100%;width: 100%;left: 0;top: 100%;position: absolute;color:#0099ff;}
#navbar-nav li.active:hover a{transform: translateY(0);}
.navbar-nav-list{position: relative;width: 100%;background-color: rgba(0,0,0,0.65);}
.navbar-nav-list .container{text-align: center;position: relative;}
.navbar-nav-list ul{line-height: normal;padding:20px 0;text-align: left;display: none;}
.navbar-nav-list ul li{width:188px;margin:10px;line-height: normal;display: inline-block;transition: 0.2s;}
.navbar-nav-list ul li img{width:188px;height:138px;background-color:rgba(0,0,0,0.5);max-width:100%;position: relative;display:inline-block;}
.navbar-nav-list ul li:hover{transform:scale(1.1);}
.navbar-nav-list ul li:hover img{filter:contrast(120%) brightness(130%);}
.navbar-nav-list ul li p{text-align: center;color:#fff;margin-top: 8px;}
.navbar-nav-list ul li:hover p{color:#0099ff;}
</style>


