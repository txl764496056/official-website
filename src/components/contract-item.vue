<template>
    <div class="item" :class="bgColor">
        <span><i class="iconfont icon-1302dizhi" :class="bgColor"></i></span>
        <h2>{{title}}</h2>
        <slot>
            <p>湖北省武汉市<br>江汉区803—805</p>
        </slot>
    </div>
</template>
<script>
export default {
    props:{
        bgColor:{
            default:"bg-color1"
        },
        title:{
            default:"标题"
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style>
.item{width:360px;text-align: center;min-height: 360px;position: relative;padding-top:10px;}
.item span{display: block;border-radius: 50%;width:110px;height:110px;overflow: hidden;position: absolute;left:50%;top:-55px;margin-left: -55px;margin-bottom:10px;border:8px solid #fff;}
.item i{display: block;width:100%;height: 100%;text-align: center;font-size: 55px;color:#fff;line-height: 94px;}
.item h2{font-size: 22px;color:#fff;margin-top: 55px;text-align: center;font-weight: normal;margin-bottom: 20px;}
.item p{font-size: 18px;color:#fff;line-height: 30px;}
.bg-color1{background:linear-gradient(to right,#fd7b6e 0%,#f5b586 100%);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#fd7b6e, endColorstr=#f5b586);/*IE<9>*/}
.bg-color2{background:linear-gradient(to right,#098ac9 0%,#2cc5cc 100%);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#098ac9, endColorstr=#2cc5cc);}
.bg-color3{background:linear-gradient(to right,#1db391 0%,#7adda9 100%);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#1db391, endColorstr=#7adda9);}
</style>


