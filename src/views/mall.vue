<template>
    <div class="mall-box">
        <!-- banner start -->
        <a href="#mall" class="scrollTo" @click="scrollTo()">
           <page-banner title='带上它世界都是你的' customClass="mall-banner" content="音乐MUSIC发烧友"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start -->
        <div v-show="isShow" id="mall" class="mtb50">
            <div class="container">
                <div class="mall-list">
                    <mall-item v-for="(item,index) in mallList" :path="{name:'mall_details',params:{id:item.id}}" :key="index" :itemMsg="item"></mall-item>   
                </div>
            </div>
        </div>
        <!-- 内容 end -->
        <bread-tab class="container bread-tab" v-show="!isShow" :itemMsg="tabMsg"></bread-tab>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
import router from '../router'
import pageBanner from '../components/page-banner' //banner
import mallItem from '../components/mall-item' //列表项
import breadTab from "../components/bread-tab" //面包屑导航
export default {
    components:{
        "page-banner":pageBanner,
        "mall-item":mallItem,
        "bread-tab":breadTab
    },
    data:function(){
        return{
            mallList:[],
            isShow:true,
            tabMsg:[]
        }
    },
    created:function(){
        let _this = this;
        axios.get(this.$url.mallList).then((res)=>{
            let arr = res.data.mallList.map(function(item,index){
                if(index%2==1){
                    item.type=true;
                }
                return item;
            });
            _this.mallList = arr;
            // 将产品信息列表给全局变量viewDetailsList
            _this.setViewDetailsList(arr);
        }).catch((res)=>{
            console.log(res,"error");
        });
        this.breadTab();
    },
    methods:{
        breadTab:function(){
            let curr = router.history.current;
            let currpath = curr.path; //当前路径
            let matched = curr.matched; //所有历史记录
            let arr = []; //存放历史路径的title和path
            if(currpath!='/mall'){
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
<style scoped>
a{display: block;}
.mall-banner{background:url(../assets/mall_banner.jpg) center center no-repeat;}
</style>


