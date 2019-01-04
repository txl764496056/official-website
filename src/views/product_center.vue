<template>
    <div class="product-box">
        <a href="#product-center" class="scrollTo" @click="scrollTo()">
           <page-banner title='产品中心' customClass="product-banner" :content="bannerContent"></page-banner>
        </a>
        <div v-show="isShow" id="product-center">
            <div class="product-nav wow animated fadeInDown">
                <tab-bar :navList="navList"></tab-bar>
            </div>
            <div class="container">
                <div class="product-list clear">
                    <!-- id:列表元素id号，index：列表项在数组中的索引 -->
                    <router-link v-for="(item,index) in cardList" :key="index" :to="{name:'view_details2',query:{id:item.id,index:index}}">
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
        <bread-tab class="container bread-tab" v-show="!isShow" :itemMsg="tabMsg"></bread-tab>
        <router-view class="container"></router-view>
    </div>
</template>
<script>
import axios from "axios"
import cardItem from "../components/card-item" //卡片样式
import pageBanner from '../components/page-banner' //banner
import tabBar from "../components/tab-bar"
import router from '../router'
import breadTab from "../components/bread-tab" //面包屑导航
export default {
    components:{
        "card-item":cardItem,
        "page-banner":pageBanner,
        "tab-bar":tabBar,
        "bread-tab":breadTab
    },
    data:function(){
        return {
            bannerContent:"为全球中小微企和商务人士提供极致创新的移动和商务工具，实现惠民惠国惠企",
            navList:["全部","发现","通讯","汇聊","直播","我的"],
            cardList:[],
            isShow:true,
            tabMsg:[] //面包屑导航数据
        }
    },
    created:function(){
       this.getData();
    },
    mounted:function(){
        this.breadTab();
    },
    methods:{
        breadTab:function(){
            let curr = router.history.current;
            let currpath = curr.path; //当前路径
            let matched = curr.matched; //所有历史记录
            let arr = []; //存放历史路径的title和path
            if(currpath!='/product_center'){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
            // 从历史记录中筛选出需要的数据
            arr = matched.map(function(item,index){ //获取每级路由的路径和title
                return {
                        title:item.meta.title || "",
                        path:item.path
                    }
            });
            this.tabMsg = arr;
        },
        handleSizeChange:function(){
            this.getData();
        },
        handleCurrentChange:function(){
            this.getData();
        },
        getData:function(){
             let _this = this;
            axios.get(this.$url.producterCenterList).then((res)=>{
                let data = res.data.producterCenterList;
                _this.cardList = data;
                 // 将产品信息列表给全局变量viewDetailsList
                _this.setViewDetailsList(data);
            }).catch((res)=>{
                console.log(res,"error");
            });
        }
    },
    watch:{
        "$route"(to,from){  
            this.breadTab();
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


