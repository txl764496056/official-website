<template>
     <div :class="customClass" class="page-banner wow animated ">
        <div class="container">
            <h2>{{title}}</h2>
            <p>{{content}}</p>
            <div class="flash-arrow">
                <i class="iconfont icon-arrowsdownline"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"page-banner",
    props:{
        title:{
            default:"标题"
        },
        content:{
            default:"内容介绍"
        },
        customClass:{
            defalut:""
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
/* 内页 banner start */
.page-banner{height: 450px;text-align: center;color:#fff;padding-top: 140px;background-color:rgb(236, 189, 145);}
.page-banner h2{font-size: 35px;font-weight: normal;color:#fff;letter-spacing: 1px;margin-bottom: 10px;}
.page-banner p{color:#fff;font-size: 20px;text-align: center;}
.flash-arrow{width:40px;height: 40px;border-radius: 50%;border:2px solid rgba(255,255,255,0.5);line-height: 40px;text-align: center;display: inline-block;margin-top: 20px;}
.flash-arrow i{color:#fff;font-size: 18px;animation:flashArrow 0.7s linear infinite alternate;display: inline-block;}
/* 内页 banner end */

/* 动画 start */
	/*内页banner 箭头动画*/
	@keyframes flashArrow{
		from{
			transform: translateY(-3px);
		}
		to{
			transform: translateY(3px);
		}
	}
/* 动画 end*/
</style>


