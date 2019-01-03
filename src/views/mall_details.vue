<template>
    <div class="container mall-box">
        <div class="mall-details">
            <div class="mall-img">
                <img :src="currGood.imgSrc" alt="">
            </div>
            <div class="mall-title">
                <h2>{{currGood.title}}</h2>
                <p>￥{{currGood.price}}</p>
                <span>{{currGood.details}}</span>
            </div>
        </div>
        <div v-for="(item2,index2) in 3" :key="index2">
            <p v-for="(item,index) in strGroup(currGood.content.strReplace('。',5,'\n'))" :key="index">{{item}}</p>
            <img :src="currGood.imgSrc" alt="">
        </div>
    </div>
</template>
<script>
import axios from "axios"
import router from '../router'
export default {
    data:function(){
        return {
            currGood:{}
        }
    },
    created:function(){
        this.getData();
    },
    methods:{
        getData:function(){
            let _this = this;
            let id = this.$route.params.id;
            let arr = _this.viewDetailsList;
            arr = arr.filter(function(item,index){
                    return item.id==id;
                });
            this.currGood = arr[0];
        },
        strGroup:function(str){
             return str.split("\n");
         }
    }
}
</script>
<style scoped>
*{text-align:left;}
.mall-box{padding:50px 0;}
p{font-size:18px;line-height:35px;}
img{max-width:100%;margin:20px 0;}
.mall-title{margin:30px 0;flex:1;}
.mall-title h2{font-size: 30px;color:#333;font-weight: bold;}
.mall-title p{color:#ff0000;font-size:40px;margin-top:30px;}
.mall-title span{color:#c6c6c6;font-size: 18px;display: inline-block;margin-top:30px;line-height:30px;}
.mall-details{display:flex;margin-bottom:40px;}
.mall-img{width:500px;height: 300px;background-color: #eee;font-size:0;display: flex;align-items:center;justify-content: center;margin-right:20px;}
.mall-img img{margin:0;max-height:100%;max-width:100%;}
</style>


