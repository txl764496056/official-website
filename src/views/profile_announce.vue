<template>
    <div>
        <div v-show="isShow">
            <title1 class="page-title wow animated fadeInDown" titleEN="当众正式公布重大事件" titleCN="企业公告"></title1>
            <router-link v-for="(item,index) in announceList" :key="index" :to="{name:'announce_details',query:{id:item.id,index:index}}">
                <news-list-item :itemMsg="item"></news-list-item>
            </router-link>
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
        <router-view></router-view>
    </div>
</template>
<script>
import axios from "axios"
import title1 from '../components/title1' //标题
import newsListItem from '../components/news-list-item' //列表项
import router from '../router'
export default {
    components:{
        "news-list-item":newsListItem,
        "title1":title1
    },
    data:function(){
        return {
            announceList:[],
            isShow:true
        }
    },
    created:function(){
        this.getData();
        this.show();
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
            axios.get(_this.$url.announce).then((res)=>{
                let data = res.data.announce;
                _this.announceList = data;
                 // 将公告信息列表给全局变量viewDetailsList
                _this.setViewDetailsList(data);
            }).catch((err)=>{
                console.log(err,"获取失败");
            });
        },
        show:function(){
            let curr = router.history.current;
            let currpath = curr.path; //当前路径
            let matched = curr.matched; //所有历史记录
            let arr = []; //存放历史路径的title和path
            if(currpath!='/profile_announce'){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
        }
    },
    watch:{
        "$route"(to,from){      
            this.show();
        }
    }
}
</script>
<style scoped>

</style>


