<template>
    <div class="item">
        <div class="item-l wow animated fadeInLeft">
            <slot name="ad-l">
                <h2>199元包年电话任意打</h2>
                <p>不改变通话质量和方式，一天24小时免费打</p>
                <p>显示主叫真实号码</p>
                <p>主叫完全免费</p>
                <p>通话免流量</p>
            </slot>
        </div>
        <div class="item-r wow animated fadeInRight">
            <slot name="ad-r">
                <img src="static/home_img/199call.png" alt="">
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"ad-item",
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
.item{padding-top:30px;position: relative;z-index: 0;overflow:hidden;display: flex;justify-content: space-between;}
.item-l,.item-r{display: inline-block;vertical-align: top;position: relative;z-index: 120;font-size: 0;text-align:left;min-width:40%;}
.item-l{padding-right: 20px;}
.item img{max-width:100%;}
.item h2{color:#0099ff;font-size:54px;letter-spacing: 1px;margin:73px 0 36px 0;font-weight: bold;}
.item p{color:#828a92;font-size: 24px;margin-bottom: 24px;}
.item p:before{content:"";display: inline-block;width:8px;height: 8px;border-radius: 50%;background-color:#828a92; vertical-align: 5px;margin-right:8px; }
</style>


