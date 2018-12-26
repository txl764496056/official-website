// 点击锚点滚动到指定DIV
function scrollTo(){
	$(".scrollTo").click(function(event){
		var e = getEvent(event);
    e.preventDefault();
    var hash = e.currentTarget.hash;
		hash = hash.substr(1);
		if($("#"+hash).length!=0){
			var top = $(this.hash).offset().top;
			$("html,body").stop().animate({
				scrollTop:top+"px"
			},1000);
		}
	});
}

function getEvent(evt){
	return evt||window.event;
}