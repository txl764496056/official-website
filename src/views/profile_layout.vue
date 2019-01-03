<template>
    <div>
        <title1 class="page-title wow animated fadeInDown" titleEN="合理产业发展布局规划" titleCN="产业布局"></title1>
        <div class="industrial-con">
            <pre>{{msg.content.strReplace("。",2,"\n")}}</pre>
            <img v-show="msg.imgSrc" :src="msg.imgSrc" alt="">
            <p v-for="(item,index) in msg.address" :key="index">{{item.area}}：{{item.PCD}}</p>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import title1 from '../components/title1' //标题
export default {
    components:{
        "title1":title1
    },
    data:function(){
        return {
            msg:{
                content:""
            }
        }
    },
    created:function(){
        let _this = this;
        axios.get(this.$url.dismsg).then((res)=>{
            _this.msg = res.data.dismsg;
        }).catch((err)=>{
            console.log(err,"获取失败")
        });
    }
}
</script>
<style scoped>
.industrial-con p,.industrial-con pre{line-height: 35px;color:#333;font-size: 18px;text-align: justify;margin:5px 0;}
.industrial-con img{max-width:100%;}
</style>

