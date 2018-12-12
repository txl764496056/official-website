<template>
    <div class="news">
        <!-- banner start -->
        <a href="#news-content">
           <page-banner title='新闻资讯' customClass="news-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 列表 start -->
        <div id="news-content">
            <div class="container">
                <router-link v-for="(item,index) in newsList" :key="index" to="/">
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
</template>
<script>
import axios from "axios"
import pageBanner from '../components/page-banner' //banner
import newsListItem from '../components/news-list-item' //新闻列表项
export default {
     components:{
        "page-banner":pageBanner,
        "news-list-item":newsListItem
    },
    data:function(){
        return{
            bannerContent:"整理并实时更新最核心最需要的公司新闻资讯",
            newsList:[]
        }
    },
    mounted:function(){ 
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
            axios.get(this.$url.news).then((res)=>{
                _this.newsList = res.data.newsList;
            }).catch((res)=>{
                console.log(res,"error");
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.news{background-color: #f5f5f5;padding-bottom:30px;}
#news-content{padding:60px 0;}
.news-banner{background:url(../assets/news_bg.jpg) center center no-repeat;background-size:cover;}
</style>

