<template>
    <div class="product-box">
        <a href="#product-center" class="scrollTo" @click="scrollTo()">
           <page-banner title='产品中心' customClass="product-banner" :content="bannerContent"></page-banner>
        </a>
        <div id="product-center">
            <div class="product-nav wow animated fadeInDown">
                <tab-bar :navList="navList"></tab-bar>
            </div>
            <div class="container">
                <div class="product-list clear">
                    <router-link v-for="(item,index) in cardList" :key="index" to="/">
                        <card-item :title="item.title" :imgSrc="item.imgSrc"></card-item>
                    </router-link>
                </div>
                <!-- 分页 start -->
                <el-pagination class="page-nums"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="4"
                    :page-size="10"
                    layout=" prev, pager, next,total"
                    :total="400"
                    :page-count="40"
                    prev-text="上一页"
                    next-text="下一页">
                </el-pagination>
                <!-- 分页 end -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import cardItem from "../components/card-item" //卡片样式
import pageBanner from '../components/page-banner' //banner
import tabBar from "../components/tab-bar"
export default {
    components:{
        "card-item":cardItem,
        "page-banner":pageBanner,
        "tab-bar":tabBar
    },
    data:function(){
        return {
            bannerContent:"为全球中小微企和商务人士提供极致创新的移动和商务工具，实现惠民惠国惠企",
            navList:["全部","发现","通讯","汇聊","直播","我的"],
            cardList:[]
        }
    },
    created:function(){
       this.getData();
    },
    methods:{
        handleSizeChange:function(){
            this.getData();
        },
        handleCurrentChange:function(){
            this.getData();
        },
        getData:function(){
             let _this = this;
            axios.get(this.$url.producterCenterList).then((res)=>{
                _this.cardList = res.data.producterCenterList;
            }).catch((res)=>{
                console.log(res,"error");
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.product-banner{background:url(../assets/product_banner.jpg) center center no-repeat;background-size:cover;}
#product-center{background-color: #f5f5f5;padding-bottom:30px;}
.product-nav{background-color: #fff;text-align: center;}
.product-list{padding-top: 40px;margin-left:-15px;}
.product-list a{margin-left: 15px;float:left;margin-bottom: 15px;font-size:0;}
</style>


