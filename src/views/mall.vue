<template>
    <div class="mall-box">
        <!-- banner start -->
        <a href="#mall-content" class="scrollTo">
           <page-banner title='' customClass="mall-banner" content=""></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start -->
        <div id="mall" class="mtb50">
            <div class="container">
                <div class="mall-list">
                    <mall-item v-for="(item,index) in mallList" :key="index" :itemMsg="item"></mall-item>   
                </div>
            </div>
        </div>
        <!-- 内容 end -->
    </div>
</template>
<script>
import axios from 'axios'
import pageBanner from '../components/page-banner' //banner
import mallItem from '../components/mall-item' //列表项
export default {
    components:{
        "page-banner":pageBanner,
        "mall-item":mallItem
    },
    data:function(){
        return{
            mallList:[]
        }
    },
    created:function(){
        let _this = this;
        axios.get(this.$url.mallList).then((res)=>{
            _this.mallList = res.data.mallList.map(function(item,index){
                if(index%2==1){
                    item.type=true;
                }
                return item;
            });
        }).catch((res)=>{
            console.log(res,"error");
        });
    }
}
</script>
<style scoped>
.mall-banner{background:url(../assets/mall_banner.jpg) center center no-repeat;}
</style>


