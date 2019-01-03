<template>
    <div>
        <div v-if="currpage" class="home-con">
            <h2 class="home-p1 txts wow animated fadeInDown">{{currpage.title}}</h2>
            <div class="dis-flex wow animted fadeInDown">
                <span class="home-p2">发表于：{{currpage.time}}</span>
                <span class="home-p2">阅读：{{currpage.num}}</span>
            </div>
        </div>
        <div v-if="currpage" class="home-txt">
            <img :src="currpage.imgSrc" alt="">
            <p v-for="(item,index) in strGroup(currpage.content.strReplace('。',5,'\n'))" :key="index">{{item}}</p>
        </div>
        <div class="home-btn dis-flex wow animated fadeInUp">
            <div class="home-btnl">
                <button @click="prePage" :class="{'gray':index==0}">
                    <p>上一篇</p>
                    <span>{{msgList[preIndex].title.substr(0,20)}}</span>
                </button>
            </div>
            <div class="home-btnr">
                <button @click="nextPage" :class="{'gray':index>(msgList.length-2)}">
                    <p>下一篇</p>
                    <span>{{msgList[nextIndex].title.substr(0,20)}}</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios"
export default {
    data:function(){
        return {
            msgList:[],
            currPageId:0,
            currpage:{},
            index:0, //当前文章索引
            preIndex:0, //上一篇文章索引
            nextIndex:0 //下一篇文章索引
        }
    },
    created:function(){
        this.msgList = this.viewDetailsList;
        // 1、被点击列表项的id，在详情页显示对应的详细信息
        this.currPageId = this.$route.params.id;
        // 2、文章索引值
        this.pageIndex(this.$route.params.index);
        // 3、获取与currPageId对应的文章信息
        this.getPage(this.currPageId,this.msgList);
     },
     methods:{
         getPage:function(currPageId,pageList){
             let id = currPageId;
             let list = pageList;
             let arr = list.filter(function(item,index){
                 return item.id==id;
             });
             this.currpage = arr[0];
         },
         strGroup:function(str){
             return str.split("\n");
         },
         /**
          * 当前文章、上一篇文章、下一篇文章的索引计算
          */
         pageIndex:function(num){
            let index = num;
            this.index = index;
            this.preIndex = index>0 ? (index-1):0;
            this.nextIndex = index<(this.msgList.length-1) ? index+1:(this.msgList.length-1);
         },
         /**
          * 上一篇文章 
          */
         prePage:function(){
             this.currpage = this.msgList[this.preIndex];
             this.pageIndex(this.preIndex);
         },
         /**
          * 下一篇文章 
          */
         nextPage:function(){
             this.currpage = this.msgList[this.nextIndex];
             this.pageIndex(this.nextIndex);
         }
     }
}
</script>
<style scoped>
.home-txt{margin-top:60px;}
.home-btn{justify-content:space-between;margin: 60px 0;font-size: 0}
.home-btn button{width:400px;height: 90px;padding:15px;background-color: #efefef;text-align: center;border:none;position: relative;overflow: hidden;z-index: 10;}
.home-btn button>*{position: relative;z-index: 20;user-select:none;}
.home-btn button p{color:#333;font-size: 18px;}
.home-btn button span{color:#828a92;font-size: 16px;margin-top: 5px;display: inline-block;}
.home-btn button:after{position: absolute;left: 50%;top: 45%;width:10px;height: 10px;border-radius: 50%;transition:transform 0.5s,opacity 0.5s;background-color: #0099ff;display: inline-block;content:"";opacity:0;z-index: 13;}
.home-btn button:hover:after{opacity: 1;transform:scale(100);}
.home-btn button:hover>*{color:#fff;}
.home-btnl{text-align:left;}
.home-btnl,.home-btnr{display: inline-block;width: 50%;}
.home-btnr{text-align: right;}
.home-btn button.gray p,.home-btn button.gray span{color:#999;}
.home-btn button.gray:hover{background-color:#eee;}
.home-btn button.gray:hover:after{opacity: 0;}
</style>


