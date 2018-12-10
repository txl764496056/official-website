<template>
	<!-- 自定义轮播动画 -->
	<div class="carousel" @mouseover="stop" @mouseout="play">
		<div class="carousel-list">
			<slot></slot>
		</div>
		<a class="arrow arrow-l" href="#" @click="prev">
			<i class="iconfont icon-arrowleft1"></i>
		</a>
		<a class="arrow arrow-r" href="#" @click="next">
			<i class="iconfont icon-arrowright"></i>
		</a>
		<div class="controls">
			<a href="#" v-for="(item,index) in itemLen" @click="clickItem" :key="index" :data-index="index" :class="{'active':index==active}"></a>
		</div>
	</div>
</template>
<script>
export default {
	name:"banner-carousel",
    data:function(){
        return {
			intervalId:"", //轮播循环setInterval的id
			listBox:".carousel-list", //轮播列表项容器
			listItem:".carousel-item", //轮播列表项
			active:0, // 控制器高亮项
			itemLen:0 // 列表项总数
        }
	},
	methods:{
		/**
		 * 下一张，下一张切换处理
		 */
		switchImg:function(leftDis,fn){
			let _this = this;
			$(_this.listBox).animate({ //显示上一张下一张
				"margin-left":"-"+leftDis+"00%" 
			},500,function(){
				fn($(this));
			});
		},
		/**
		 * 上一张
		 * 端点判断：
		 * (1)实现效果：当控制点是第一个高亮，且点击了上一张按钮，则显示的应该是最后一张图，进行循环
		 * (2)实现方法：点击按钮后，进行动画，让列表第一项（图片最后一张）显示出来，然后让列表移动（"-"+len+"00%"）长度，让真正的最后一张图（列表第四项）显示出来
		 *  $(_this.listBox).animate({
		 *  	"margin-left":"-"+curr+"00%" 
		 *  },500,function(){
		 *  	if(curr>0){
		 *  		_this.active = --curr; //与 curr++;_this.acitve=curr，效果相同
		 *  	}else if(curr==0){
		 *  		_this.active = len-1;
		 *  		$(this).css({"margin-left":"-"+len+"00%"}); //让真正的第一张图显示，达到视觉无缝连接
		 *  	}
		 *  });
		 */
		prev:function(){
			let _this = this;
			let curr = this.active;
			let len = this.itemLen;
			
			this.switchImg(curr,function(obj){
				if(curr>0){
					_this.active = --curr; //与 curr--;_this.acitve=curr，效果相同
				}else if(curr==0){
					_this.active = len-1;
					$(obj).css({"margin-left":"-"+len+"00%"}); //让真正的最后一张图显示，达到视觉无缝连接
				}
			});
		},
		/**
		 * 下一张
		 * 端点判断：
		 * (1)实现效果：当控制点是最后一个高亮，且点击了下一张按钮，则显示的应该是最第一张图，进行循环
		 * (2)实现方法：点击按钮后，进行动画，让列表最后一项（图片第一张）显示出来，然后让列表移动（"-100%"）长度，让真正的第一张图（列表第二项）显示出来
		 *  $(_this.listBox).animate({
		 *  	"margin-left":"-"+(curr+2)+"00%"
		 *  },500,function(){
		 *  	if(curr<len-1){
		 *  		_this.active = ++curr; //与 curr++;_this.acitve=curr，效果相同
		 *  	}else if(curr==len-1){
		 *  		_this.active = 0;
		 *  		$(this).css({"margin-left":"-100%"}); //让真正的第一张图显示，达到视觉无缝连接
		 *  	}
		 *  });
		 */
		next:function(){
			let _this = this;
			let curr = _this.active;
			let len = _this.itemLen;
			
			this.switchImg(curr+2,function(obj){
				if(curr<len-1){
					_this.active = ++curr; //与 curr++;_this.acitve=curr，效果相同
				}else if(curr==len-1){
					_this.active = 0;
					$(obj).css({"margin-left":"-100%"}); //让真正的第一张图显示，达到视觉无缝连接
				}
			});
		},
		/**
		 *  暂停循环
		 */
		stop:function(){
			let _this = this;
			clearInterval(_this.intervalId);
		},
		/**
		 * 开始循环
		 */
		play:function(){
			this.intervalId = setInterval(this.next,3000);
		},
		clickItem:function(evt){
			let _this = this;
			let target = evt.target||evt.srcElement;
			let curr;
			if(target.dataset){
				curr = target.dataset.index;
			}else{
				curr = target.getAttribute("data-index");
			}
			curr = parseInt(curr); //  获取到的是字符串，参与计算要转换成数值
			$(_this.listBox).css({"margin-left":"-"+(curr+1)+"00%"}); //下一张是最后一张时，显示列表第len-1个，也就是第一张图
			_this.active = curr;

		},
		/**
		 * 轮播初始化
		 * （1）复制列表第一项，插入列表最后面
		 * （2）复制列表第2项，插入列表最前面
		 * 复制并插入节点，目的使视觉效果达到无缝衔接
		 */
		init:function(){
			let _this = this;
			let items = $(_this.listBox+" "+_this.listItem);
			_this.itemLen = items.length; //轮播项 数量
			
			let firstItem = $(items).first().clone(); //复制轮播第一项节点
			let lastItem = $(items).last().clone(); //复制轮播最后一项节点

			$(firstItem).appendTo(_this.listBox); //插入至列表项最后，最为最后一个节点
			$(lastItem).prependTo(_this.listBox); //插入至列表项第一个，最为最第一个节点

			_this.play(); //循环开始
		}
	},
	mounted:function(){
		this.init();
	}
}
</script>
<style scoped>
/* 自定义轮播动画 */
.carousel{overflow: hidden;min-width:1200px;position:relative;z-index:10}
.carousel-list{position: relative;font-size:0;width:1000%;font-size:0;margin-left:-100%;}
/* 左右箭头 */
.arrow{position:absolute;top:calc(50% - 30px);width:60px;height:60px;background-color:rgba(0,0,0,0.5);color:rgba(255,255,255,0.3);display:inline-block;z-index:99;text-align:center;line-height:54px;border-radius: 50%;display:none;}
.arrow i{font-size: 40px;}
.arrow-l{left:30px;}
.arrow-r{right:30px;}
.arrow:hover i{color:rgba(255,255,255,0.8)}
.carousel:hover .arrow{display: inline-block;}

/* 控制点 */
.controls{position:absolute;bottom:10px;left:0;right:0;text-align:center;}
.controls a{width:12px;height:12px;margin:0 5px;display: inline-block;background-color: rgba(0,0,0,0.5);border-radius: 50%;}
.controls a.active{background-color: #fff;}
</style>


