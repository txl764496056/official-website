<template>
    <div class="home-footer">
        <div class="container wow animated zoomIn">
			<ul>
				<li v-for="(item,index) in navList" :key="index">
					<router-link :to="item.url">{{item.navtxt}}</router-link>
				</li>
			</ul>
			<p>总部地址：湖北省武汉市江汉区803——805</p>
			<p>电话：（0755）230898748 商务咨询：230-034-3288 技术客服：890-332-2200</p>
			<p>公司名称：******限公司</p>
			<p>Copyright 1998-2014 cyhs.cn Inc. All rights reserved.京ICP备07002685-1号|京网公安备119094859485946866</p>
		</div>
    </div>
</template>
<script>
export default {
    name:"bottom-footer",
    data:function(){
		return {
			navList:[
				{
					url:"/index",
					navtxt:"首页"
				},
				{
					url:"/",
					navtxt:"产品中心"
				},
				{
					url:"/",
					navtxt:"新闻资讯"
				},
				{
					url:"/",
					navtxt:"联系我们"
				}
			]
		}
    }
}
</script>
<style scoped>
.home-footer{background-color: #575757;padding:20px;text-align: center;}
.home-footer ul{margin-top: 10px;margin:0 auto;width: 800px;}
.home-footer ul li{display: inline-block;}
.home-footer ul li a{display: inline-block;float: left;color:#fff;padding:0 20px;position: relative;}
.home-footer ul li a::after{content: "";width:1px;height: 16px;background-color: #fff;display: inline-block;position: absolute;right: 0;top: 4px;}
.home-footer ul li a:hover{color:#0099ff;}
.home-footer ul li:last-child a{border-right:none;}
.home-footer p{color:#fff;font-size: 14px;margin-top: 10px;}
</style>

