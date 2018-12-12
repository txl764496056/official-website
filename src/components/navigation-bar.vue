<template>
    <div id="navbar" @mouseleave="foldNav" class="navbar wow animated fadeInUp">
		<div class="container  clear">
			<div class="logo fl">
				<img class="fl" :src="logo" alt="" />
				<p class="com-name fr">{{companyMsg.name}}</p>
			</div>
			<ul id="navbar-nav" class="fr">
                <li v-for="(item,index) in navList" :key="index" @click="navClick" @mouseover="navbarMover" :class="{'active':activeIndex==index}">
                    <router-link :data-nav="item.name" :data-index="index" :data-key="item.key"  :to="item.url">{{item.name}}</router-link>
                </li>
			</ul>
		</div>
		<div class="navbar-nav-list">
			<div class="container">
                <ul class="nav-list hid" v-if="submenu">
                    <li v-for="(item,index) in submenu" :key="index">
                        <router-link :to="item.url">
                            <img :src="item.img" alt="">
                            <p>{{item.name}}</p>
                        </router-link>
                    </li>
                </ul>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"navigation-bar",
    data:function(){
        return {
            activeIndex:0,
            logo:"static/logo.png",
            companyMsg:{
                name: "****公司",//公司名称
            },
            navList:[ // 导航一级菜单
                {
                    name:"首页", //菜单名
                    url:"/index", //跳转地址
                    key:"", //对应二级菜单索引值
                },
                {
                    name:"企业简介",
                    url:"/company_profile",
                    key:"profile"
                },
                {
                    name:"产品中心",
                    url:"/product_center",
                    key:"productC"
                },
                {
                    name:"商城",
                    url:"/mall",
                    key:""
                },
                {
                    name:"新闻资讯",
                    url:"/news",
                    key:""
                },
                 {
                    name:"客户端下载",
                    url:"/",
                    key:""
                },
                 {
                    name:"联系我们",
                    url:"/",
                    key:"contract"
                }
            ],
            submenu:[], //悬停显示的二级菜单
            submenus:{ //导航二级菜单
                "profile":[
                    {
                        name:"企业文化",
                        img:"static/home_img/nav_culture.png",
                        url:"/"
                    },
                    {
                        name:"产业布局",
                        img:"static/home_img/nav_Industrial.png",
                        url:"/"
                    },
                    {
                        name:"荣誉证书",
                        img:"static/home_img/nav_my.png",
                        url:"/"
                    },
                    {
                        name:"企业公告",
                        img:"static/home_img/nav_affiche.png",
                        url:"/"
                    }
                ],
                "productC":[
                    {
                        name:"发现",
                        img:"static/home_img/nav_find.png",
                        url:"/"
                    },
                    {
                        name:"汇聊",
                        img:"static/home_img/nav_chat.png",
                        url:"/"
                    },
                    {
                        name:"通讯",
                        img:"static/home_img/nav_call.png",
                        url:"/"
                    },
                    {
                        name:"直播",
                        img:"static/home_img/nav_live.png",
                        url:"/"
                    },
                    {
                        name:"我的",
                        img:"static/home_img/nav_my.png",
                        url:"/"
                    }
                ],
                "contract":[
                     {
                        name:"招贤纳士",
                        img:"static/home_img/nav_recruit.png",
                        url:"/"
                    }
                ]
            }
        }
    },
    methods:{
        /**
         * 一级菜单悬停事件，向下滑出二级菜单
         * 利用promise,先更新二级菜单数据，再下滑展开二级菜单
         * 同步执行的问题：例如，a,b 2个一级菜单，其中b无二级菜单，也就是二级菜单数据为空
         *               鼠标操作：移入a -> 移入b -> 移入a，当无二级菜单的b,移入有二级菜单的a时，并不会出现a的二级菜单
         *               原因：数据更新和下滑展示同步执行，下滑展示的时候，数据更新还没完成
         */
        navbarMover:function(evt){
            let target = evt.target ? evt.target : evt.srcElement;//ie低版本要srcElement,且不支持dataset
            let key = "";
            if(evt.target.dataset){
                key = target.dataset.key;
            }else{
                key = target.getAttribute('data-key');
            }
            
            let promise = new Promise((success,fail)=>{
                success();
            });
            promise.then((res)=>{ //跟新二级菜单数据 
               return new Promise((success,fail)=>{
                   this.submenu = this.submenus[key];
                   success(true);
               });
            }).then((res)=>{ //二级菜单向下展开
                if(res){
                    $(".nav-list").stop().slideDown();
                }
            });
        },
        /** 
         * 离开导航最顶层父元素，收起所有子菜单
        */
        foldNav:function(){
            $("ul.nav-list").stop().slideUp("2000");
        },
        navClick(evt){
           this.activeIndex = evt.target.dataset.index;
        }
    },
    mounted:function(){
        this.submenu = this.submenus['profile'];
    }
}
</script>
<style scoped>
.logo{height:100px;line-height:100px;width:auto;}
.logo img{width:74px;height: 66px;margin-top:16px;}
.logo p.com-name{height:100px;line-height:inherit;font-size:26px;;color:#222;margin-left:20px;letter-spacing:3px;}
#navbar-nav,#navbar{line-height: 100px;height: 100px;}
#navbar-nav>li{float:left;position: relative;overflow: hidden;}
#navbar-nav li a{display: inline-block;min-width: 114px;color:#333;font-size: 18px;text-align:center;position: relative;transition:all 0.6s;}
#navbar-nav li.active a{background-color:#0099ff;color:#fff;position: relative;}
#navbar-nav li:hover a{transform: translateY(-100px);}
#navbar-nav li a:after{content:attr(data-nav);display: inline-block;height: 100%;width: 100%;left: 0;top: 100%;position: absolute;color:#0099ff;}
#navbar-nav li.active:hover a{transform: translateY(0);}
.navbar-nav-list{position: relative;width: 100%;background-color: rgba(0,0,0,0.65);z-index:999;}
.navbar-nav-list .container{text-align: center;position: relative;}
.navbar-nav-list ul{line-height: normal;padding:20px 0;text-align: left;display: none;}
.navbar-nav-list ul li{width:188px;margin:10px;line-height: normal;display: inline-block;transition: 0.2s;}
.navbar-nav-list ul li img{width:188px;height:138px;background-color:rgba(0,0,0,0.5);max-width:100%;position: relative;display:inline-block;}
.navbar-nav-list ul li:hover{transform:scale(1.1);}
.navbar-nav-list ul li:hover img{filter:contrast(120%) brightness(130%);}
.navbar-nav-list ul li p{text-align: center;color:#fff;margin-top: 8px;}
.navbar-nav-list ul li:hover p{color:#0099ff;}
</style>


