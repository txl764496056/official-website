<template>
    <div>
        <title1 v-show="isShow" class="photo-title wow animated fadeInDown" titleEN="文化见证的时刻" titleCN="企业文化照片墙"></title1>
        <div v-show="isShow" id="product-center">
            <div class="container">
                <div class="product-list clear">
                    <router-link v-for="(item,index) in cardList" :key="index"  :to="{name:'view_details',params:{index:item.id}}">
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
        <router-view/>
    </div>
</template>
<script>
import axios from "axios"
import cardItem from "../components/card-item" //卡片样式
import title1 from '../components/title1' //标题
export default {
    components:{
        "card-item":cardItem,
        "title1":title1
    },
    data:function(){
        return {
            cardList:[],
            //是否显示照片墙和标题的判断条件，当点击照片列表任意项时，路由会改变，此时this.isShow = !this.isShow;
            // this.isShow = true，显示标题和照片墙，this.isShow = false隐藏标题和照片墙，此时显示子页面（查看图片页面）
            isShow:true 
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
            axios.get(this.$url.producterCenterList).then((res)=>{
                let data = res.data.producterCenterList;
                _this.cardList = data;

                // 将照片墙信息列表给全局变量viewDetailsList
                _this.setViewDetailsList(data);

            }).catch((res)=>{
                console.log(res,"error");
            });
        }
    },
    watch:{
        "$route"(to,from){
            this.isShow = !this.isShow;
        }
    }
}
</script>
<style scoped>
.photo-title{margin:30px 0;}
.product-list{padding-top: 40px;margin-left:-15px;}
.product-list a{margin-left: 15px;float:left;margin-bottom: 15px;font-size:0;}
</style>

