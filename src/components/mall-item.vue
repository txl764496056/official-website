<template>
    <div class="item clear">
        <div class="item-bg" :class="{'fl':itemMsg.type,'fr':!itemMsg.type}">
            <img v-if="itemMsg.imgSrc!=''" :src="itemMsg.imgSrc" alt="">
        </div>
        <div class="item-sm" :class="{'fl':!itemMsg.type,'fr':itemMsg.type}">
            <h2>{{itemMsg.title}}</h2>
            <span>￥<b>{{itemMsg.price}}</b></span>
            <p>{{itemMsg.details}}</p>
            <a href="/">立即查看</a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        itemMsg:{
            default:function(){
                return {
                    type:true, //true:左浮动，false:有浮动
                    imgSrc:"",
                    title:"标题",
                    price:"15.00",
                    details:"介绍"
                }
            }
        }
    },
    data:function(){
        return{

        }
    }
}
</script>
<style scoped>
.item{text-align:left;;height: 450px;border-radius:20px;overflow: hidden;box-shadow: 0 0 12px rgba(100,100,100,0.2);margin-bottom:30px;}
.item-bg{width:710px;background-color: #f0efef;}
.item-sm{width:490px;background-color: #fff;padding:45px;}
.item-bg,.item-sm{height: 100%;overflow:hidden;}
.item-bg img{width:100%;height: 100%;transition:transform 0.5s;}
.item-bg:hover img{transform: scale(1.1);}
.item-sm h2{font-size: 24px;color:#454141;margin-top: 20px;font-weight: normal;}
.item-sm span{color:#ff7139;font-size: 24px;margin-top: 20px;display: inline-block;}
.item-sm span b{color:inherit;font-size: 30px;font-weight: normal;}
.item-sm p{color:#999;font-size: 20px;line-height: 28px;margin-top: 40px;}
.item-sm a{color:#fff;font-size: 24px;background-color: #ff723b;border-radius: 10px;margin-top: 50px;display: inline-block;padding:15px 35px;font-weight: normal;transition:background-color 0.3s;position: relative;}
.item-sm a:hover{background-color: #e45c27;;box-shadow: 0px 5px 5px rgba(255,114,59,0.2);}
</style>


