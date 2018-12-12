<template>
    <ul class="tab-bar clear">
        <li v-for="(item,index) in navList" :key="index" :class="{'active':index==active}">
            <a href="#">{{item}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        navList:{
            default:function(){
                return ["选项1","选项2","选项3","选项4",,"选项5"]
            }
        },
        active:{
            default:0
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
.tab-bar{display: inline-block;max-width:1200px;height: 100px;line-height: 100px;}
.tab-bar li{float: left;margin:0 30px;}
.tab-bar li a{color:#333;font-size: 16px;display: inline-block;text-align: center;height: 42px;padding:0 33px;line-height: 42px;border-radius: 22px;}
.tab-bar li:hover a{animation:product-nav 0.3s;}
.tab-bar li.active:hover a{animation-name:none;}
.tab-bar li.active a,.tab-bar li:hover a{color:#fff;background-color:#0099ff;box-shadow: 0 3px 8px rgba(0,153,255,0.3);}
/* 动画 start  */
@keyframes product-nav{
	0%{
		transform:scale(0.1);
	}
	100%{
		transform:scale(1);
	}
}
/* 动画 end  */
</style>


