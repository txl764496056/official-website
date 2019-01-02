<template>
    <div>
        <div class="home-con">
            <h2 class="home-p1 txts wow animated fadeInDown">内蒙古中牧生物药业有限公司离心式喷雾干燥装置系统采购竞争性磋商成交公告</h2>
            <div class="dis-flex wow animted fadeInDown">
                <span class="home-p2">发表于：2018-05-29</span>
                <span class="home-p2">阅读：5841</span>
            </div>
        </div>
        <div class="home-txt">
            <img src="static/mayi.jpg" alt="">
            <p>{{currpage.content}}</p>
        </div>
        <div class="home-btn dis-flex wow animated fadeInUp">
            <div class="home-btnl">
                <button>
                    <p>上一篇</p>
                    <span>期待已久的Java 9今日发布</span>
                </button>
            </div>
            <div class="home-btnr">
                <button>
                    <p>下一篇</p>
                    <span>中国华农资产经营有限公司面向集团内外 公开...</span>
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
            currpage:{}
        }
    },
    created:function(){
        this.msgList = this.viewDetailsList;
        // 被点击列表项的id，在详情页显示对应的详细信息
        this.currPageId = this.$route.params.index;
        // 获取与currPageId对应的文章信息
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
             console.log(arr);
         }
     }
}
</script>
<style scoped>
.home-btn{justify-content:space-between;margin: 60px 0;font-size: 0}
.home-btn button{width:400px;height: 90px;padding:15px;background-color: #efefef;text-align: center;border:none;position: relative;overflow: hidden;z-index: 10;}
.home-btn button>*{position: relative;z-index: 20;}
.home-btn button p{color:#333;font-size: 18px;}
.home-btn button span{color:#828a92;font-size: 16px;margin-top: 5px;display: inline-block;}
.home-btn button:after{position: absolute;left: 50%;top: 45%;width:10px;height: 10px;border-radius: 50%;transition:transform 0.5s,opacity 0.5s;background-color: #0099ff;display: inline-block;content:"";opacity:0;z-index: 13;}
.home-btn button:hover:after{opacity: 1;transform:scale(100);}
.home-btn button:hover>*{color:#fff;}
.home-btnl,.home-btnr{display: inline-block;width: 50%;}
.home-btnr{text-align: right;}
</style>


