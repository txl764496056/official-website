<template>
    <div class="topbar wow animated fadeInDown">
		<div class="container">
			<div class="topbar-left">
				<span>{{prompt}}</span><b>{{time}}</b>
			</div>
			<div class="topbar-right">
				<a href="../video/videoLogin2.html">上传视频</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name:"top-bar",
    data:function(){
        return {
            prompt:"您好，欢迎进入汇能科技！",
            time:"今天是2018年6月21日星期四"
        }
    }
}
</script>
<style scoped>
.topbar .container{font-size: 0;overflow-x: hidden;}
.topbar{height: 54px;line-height: 54px;border-bottom: 1px solid #f6f6f6;font-size: 0px;}
.topbar-left,.topbar-right{display: inline-block;width:50%;}
.topbar-left span,.topbar-left b{color:#828a92;font-size: 16px;}
.topbar-left b{font-weight: normal;margin-left: 40px;}
.topbar-right{text-align: right;}
.topbar-right a{color:#0099ff;font-size: 16px;}
.topbar-right a:before{content: "\e658";font-family: "iconfont"!important;font-size: 18px;margin-right: 5px;color:#0099ff;}
.topbar-right a:hover,.topbar-right a:hover:before{color:#fa8700;text-decoration:none;}
</style>


