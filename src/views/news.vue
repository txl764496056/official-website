<template>
    <div class="news">
        <!-- banner start -->
        <a href="#news-content" class="scrollTo" @click="scrollTo()">
           <page-banner title='新闻资讯' customClass="news-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <div v-show="isShow">
            <!-- 列表 start -->
            <div  id="news-content">
                <div class="container">
                    <router-link v-for="(item,index) in newsList" :key="index" :to="{name:'news_details',params:{id:item.id,index:index}}">
                        <news-list-item :itemMsg="item"></news-list-item>
                    </router-link>
                </div>
            </div>
            <!-- 列表 end -->
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
        <bread-tab class="container bread-tab" v-show="!isShow" :itemMsg="tabMsg"></bread-tab>
        <router-view class="container"></router-view>
    </div>
</template>
<script>
import axios from "axios"
import pageBanner from '../components/page-banner' //banner
import newsListItem from '../components/news-list-item' //新闻列表项
import router from '../router'
import breadTab from "../components/bread-tab" //面包屑导航
export default {
     components:{
        "page-banner":pageBanner,
        "news-list-item":newsListItem,
        "bread-tab":breadTab
    },
    data:function(){
        return{
            bannerContent:"整理并实时更新最核心最需要的公司新闻资讯",
            newsList:[],
            isShow:true,
            tabMsg:[]
        }
    },
    mounted:function(){ 
        this.getData();
        this.breadTab();
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
            axios.get(this.$url.news).then((res)=>{
                let data = res.data.newsList;
                _this.newsList = res.data.newsList;
                 // 将新闻信息列表给全局变量viewDetailsList
                _this.setViewDetailsList(data);
            }).catch((res)=>{
                console.log(res,"error");
            });
        },
        breadTab:function(){
            let curr = router.history.current;
            let currpath = curr.path; //当前路径
            let matched = curr.matched; //所有历史记录
            let arr = []; //存放历史路径的title和path
            if(currpath!='/news'){
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
.news{background-color: #f5f5f5;padding-bottom:30px;}
#news-content{padding:60px 0;}
.news-banner{background:url(../assets/news_bg.jpg) center center no-repeat;background-size:cover;}
</style>

