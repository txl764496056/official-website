<template>
    <div class="title2 dis-flex wow animated fadeInDown">
        <i class="iconfont icon-1302dizhi"></i>
        <span>您现在的位置：</span>
        <div class="tab-list" v-for="(item,index) in itemMsg" :key="index">
            <router-link v-if="index<(itemMsg.length-1)" :to="item.path">{{item.title}}<span>></span></router-link>
            <span v-else>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        itemMsg:{
            type:Array,
            default:function(){
                return [];
            }
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style>
.tab-list{display:inline-block;}
.title2{color:#828a92;line-height: 50px;height: 50px;border-bottom:1px solid #e6e6e6;letter-spacing: 1px;}
.title2>*{font-size: 16px;}
.title2 i{margin-right: 2px;}
.title2 a{color:#828a92;}
.title2 a:hover{color:#0099ff;}
</style>


