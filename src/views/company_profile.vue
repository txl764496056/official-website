<template>
    <div class="profile-box">
        <!-- banner start -->
        <a href="#profile-content" class="scrollTo" @click="scrollTo()">
           <page-banner title='企业简介' customClass="profile-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start --> 
        <div id="profile-content" class="profile-content container mtb50">
            <bread-tab v-show="isShow"  :itemMsg="tabMsg"></bread-tab>
            <router-view/>
        </div>
        <!-- 内容 end -->
    </div>
</template>
<script>
import router from '../router'
import pageBanner from '../components/page-banner'
import breadTab from "../components/bread-tab" //面包屑导航
export default {
    components:{
         "bread-tab":breadTab,
         "page-banner":pageBanner
    },
    data:function(){
        return {
            bannerContent:"一个富有激情而又低调的团队，您的满意，是我们不懈的使命",
            isShow:false,
            tabMsg:[]
        }
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
            if(currpath!='/profile_index'){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
            // 从历史记录中筛选出需要的数据
            arr = matched.filter(function(item,index){ //过滤掉每级路由的首页
                return item.path.search("_index")==-1;
            }).map(function(item,index){ //获取每级路由的路径和title
                return {
                        title:item.meta.title || "",
                        path:item.path
                    }
            });
            this.tabMsg = arr;
        }
    },
    watch:{
        '$route'(to,from){
            this.breadTab();
        }
    }
}
</script>
<style scoped>
.profile-box{text-align:left;}
.profile-banner{background: url("../assets/profile_banner.jpg") center center no-repeat;background-size:cover;}
.profile-content{padding:70px 0;}
</style>


