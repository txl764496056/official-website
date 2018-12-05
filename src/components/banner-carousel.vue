<template>
	<!-- 自定义轮播动画 -->
	<div class="carousel">
		<div class="carousel-list">
			<slot></slot>
		</div>
		<a href="#" @click="prev">上一个</a>
		<a href="#" @click="next">下一个</a>
		<div class="controls">
			<a href="#" v-for="(item,index) in itemLen" @click="changeItem" :key="index" :data-index="index" :class="{'active':index==active}"></a>
		</div>
	</div>
</template>
<script>
import $ from "jquery"
export default {
    name:"banner-carousel",
    data:function(){
        return {
			intervalId:"",
			active:0,
			itemLen:3
			// bannerImg:["../assets/home_img/banner1.jpg","../assets/home_img/banner2.jpg","../assets/home_img/banner3.jpg"]
        }
	},
	methods:{
		prev:function(){
			
		},
		/**
		 * 下一张
		 * 
		 */
		next:function(){
			let _this = this;
			let curr = _this.active;
			let len = _this.itemLen;
			// $(".carousel-item").eq(_this.active).animate({
			// 	"margin-left":"-"+(_this.active+1)+"0%"
			// },500,function(){
			// 	_this.active++;
			// 	if(_this.active>=_this.itemLen){
			// 		_this.active = 0;
			// 	}
			// });
			// curr++;
			if(curr>=0&&curr<len-1){
				
				$(".carousel-list .carousel-item").eq(curr).animate({
					"margin-left":"-"+(curr+1)+"0%"
				},500,function(){
					curr++;
					_this.active = curr;
					$(this).css({"margin-left":0});
				});
			}else if(curr==len-1){
				
			}
			
		},
		changeItem:function(evt){
			
		},
		// 自定义轮播动画
		carouselPlay:function(){
			let _this = this;
			_this.itemLen = $(".carousel-list .carousel-item").length; //轮播项 数量
			_this.intervalId = setInterval(_this.next,3000);
		}
	},
	mounted:function(){
		this.carouselPlay();
		
	}
}
</script>
<style scoped>
/* 自定义轮播动画 */
.carousel{overflow: hidden;min-width:1200px;}
.carousel-list{position: relative;font-size:0;width:1000%;font-size:0;}

.controls a{width:16px;height:16px;margin:0 5px;display: inline-block;background-color: rgba(0,0,0,0.5)}
.controls a.active{background-color: rgb(231, 107, 107);}
</style>


