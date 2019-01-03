<template>
    <div>
        <ul v-for="(item,index) in ulBox" :key="index" class="certf-honor-unit clear">
            <li v-for="(item2,index2) in 3" :key="index2">
                <div class="certf-honor-item">
                    <img :src="imgList[index2+index]" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data:function(){
        return {
            ulBox:0,
            imgList:[]
        }
    },
    mounted:function(){
        let _this = this;
        axios.get(_this.$url.honors).then((res)=>{
            let data = res.data.honors;
            _this.imgList = data;
            let num = 0; //计算每3张图一行，有多少行
            for(let i=0;i<data.length;i++){
                num = (i%3==0 ? ++num:num);
            }
            _this.ulBox = num;
            console.log(res);
        }).catch((err)=>{
            console.log(err,"获取失败");
        });
    }
}
</script>
<style scoped>
.certf-honor-unit{margin-top: 60px;position: relative;z-index: 10;margin-bottom: 110px;}
.certf-honor-unit::before{position: absolute;display: inline-block;width: 100%;bottom: -98px;content:"";background:url(../assets/honor_bg.png) center bottom no-repeat;height: 110px;left:-20px;}
.certf-honor-unit li{float: left;width: 400px;text-align: center;position: relative;z-index: 20;}
.certf-honor-item{border-width:13px;border-style: solid; border-top-color:#333;border-right-color:#4a4a4a;border-left-color:#4a4a4a;border-bottom-color:#333;width:270px;height: 185px;line-height: 155px;margin-left:50px;text-align: center;background-color:#bcbcbc;box-shadow: 11px 4px 15px rgba(0,0,0,0.3);overflow: hidden;}
.certf-honor-item img{max-width: 100%;max-height: 100%;vertical-align: middle;transition:transform 0.3s;}
.certf-honor-item:hover img{transform:scale(1.2);}
</style>



