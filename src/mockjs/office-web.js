exports.install = function(Vue,options){
	// 1、点击锚点滚动到指定DIV
	Vue.prototype.scrollTo = function(event){
			var e = this.getEvent(event);
			e.preventDefault();
			var hash = e.currentTarget.hash;
			hash = hash.substr(1);
			if(hash.length!=0){
				var top = $("#"+hash).offset().top;
				$("html,body").stop().animate({
						scrollTop:top+"px"
				},1000);
			}
	}

	// 2、返回顶部
	Vue.prototype.backTop = function(){
			var scrollT = $(window).scrollTop();
			if(scrollT!=0)
			$("html,body").stop().animate({"scrollTop":0},"slow");
	}

	Vue.prototype.getEvent = function(evt){
			return evt||window.event;
	}

	// 3、存储 新闻列表信息、照片墙列表信息
	Vue.prototype.viewDetailsList = [];
	
	// 设置列表信息值
	Vue.prototype.setViewDetailsList = function(obj){
		Vue.prototype.viewDetailsList = obj;
	}
}

