<template>
    <div class="item">
        <div class="item-img">
            <img v-if="imgSrc!=''" :src="imgSrc" alt="">
        </div>
        <div class="item-img-title">
            <p>{{title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            default:"标题"
        },
        imgSrc:{
            default:""
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
.item{width:390px;box-shadow: 0 1px 5px rgba(100,100,100,0.1);}
.item a{display: block;}
.item-img{width:100%;height: 290px;text-align: center;line-height:285px;background-color: #ddd;overflow: hidden;}
.item-img img{ width: 100%;height: 100%;vertical-align: middle;transition:transform 0.3s;}
.item-img:hover img{transform: scale(1.1);}
.item-img-title{height: 70px;background-color: #fff;line-height: 70px;position: relative;z-index: 10;}
.item-img-title p{color:#333;font-size: 16px;padding:0 20px;position: relative;z-index: 20}
.item-img-title:before{content:"";display: inline-block;position: absolute;z-index: 15;background-color: #0099ff;width:0;transition:width 0.5s;height: 100%;left:0;}
.item:hover .item-img img{filter: contrast(110%) brightness(110%);} 
.item:hover .item-img-title:before{width:100%;}
.item:hover .item-img-title p{color:#fff;}
</style>


