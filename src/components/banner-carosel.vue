<template>
	<!-- 自定义轮播动画 -->
	<div class="carousel">
		<div class="carousel-list">
			<div class="carousel-item">
				<img src="../assets/home_img/banner1.jpg" alt="">
			</div>
			<div class="carousel-item">
				<img src="../assets/home_img/banner2.jpg" alt="">
			</div>
			<div class="carousel-item">
				<img src="../assets/home_img/banner3.jpg" alt="">
			</div>
		</div>
		<a href="#" @click="prev">上一个</a>
		<a href="#" @click="next">下一个</a>
		<div class="controls">
			<a href="#" v-for="(item,index) in controls" @click="changeItem" :key="index" :data-index="index" :class="{'active':index==active}"></a>
		</div>
	</div>
</template>
<script>
import $ from "jquery"
export default {
    name:"banner-carosel",
    data:function(){
        return {
			flag:true,
			intervalId:"",
			controls:3,
			active:0
			// bannerImg:["../assets/home_img/banner1.jpg"]
        }
	},
	methods:{
		prev:function(){
			let _this = this;
			let len = $(".carousel-list .carousel-item").length;

			clearInterval(_this.intervalId); //停止自动播放

			if(_this.flag){
				_this.flag = false;
				_this.active--;
				_this.active = _this.active<0 ? (len-1):_this.active;
				$(".carousel-list .carousel-item").eq(len-1).prependTo($(".carousel-list")).css({"margin-left":"-10%"}).stop().animate({
					"margin-left":0
				},1000,function(){
					_this.flag = true;
					_this.carouselPlay();  //开始自动播放
				});
			}else{
				return;
			}
		},
		next:function(){
			let _this = this;
			let len = $(".carousel-list .carousel-item").length;

			clearInterval(_this.intervalId); //停止自动播放

			if(_this.flag){
				_this.flag = false;
				_this.active++;
				_this.active = _this.active>=len ? 0:_this.active;
				$(".carousel-list .carousel-item").eq(0).stop().animate({
					"margin-left":"-10%"
				},1000,function(){
					$(".carousel-list .carousel-item").eq(0).appendTo($(".carousel-list")).css({"margin-left":"0"});
					_this.flag = true;
					
					_this.carouselPlay();  //开始自动播放
				});
			}else{
				return;
			}
		},
		changeItem:function(evt){
			let target = evt.target ? evt.target : evt.srcElement;
			let index = target.index;

			
		},
		// 自定义轮播动画
		carouselPlay:function(){
			let len = $(".carousel-list .carousel-item").length;
			let index = 0;

			this.controls = len;

			// 播放
			this.intervalId = setInterval(function(){
				let _this  = this;
				index++;
				if(index>=len){index = 0;}
				_this.active = index;
				$(".carousel-list .carousel-item").eq(0).stop().animate({
					"margin-left":"-10%"
				},1000,function(){
					$(".carousel-list .carousel-item").eq(0).appendTo($(".carousel-list")).css({"margin-left":"0"});
				});
			},7000);
		}
	},
	mounted:function(){
		this.carouselPlay();
		// this.imgH();
	}
}
</script>
<style scoped>
/* 自定义轮播动画 */
.carousel{overflow: hidden;min-width:1200px;}
.carousel-list{position: relative;font-size:0;width:1000%;font-size:0;}
.carousel-item{font-size:0;position:relative;width:10%;height:100%;float:left;}
.carousel-item>*{font-size:14px;}
.carousel-item img{width:100%;}

.controls a{width:16px;height:16px;margin:0 5px;display: inline-block;background-color: rgba(0,0,0,0.5)}
.controls a.active{background-color: rgb(231, 107, 107);}
</style>


