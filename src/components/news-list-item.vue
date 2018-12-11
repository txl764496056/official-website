<template>
    <div class="item">
        <div class="item-img">
            <img v-if="itemMsg.imgSrc!=''" :src="itemMsg.imgSrc" alt="">
        </div>
        <div class="item-con">
            <h2>{{itemMsg.title}}</h2>
            <p>{{itemMsg.content}}</p>
        </div>
        <div class="item-time">
            <p>{{itemMsg.day}}</p>
            <span>{{itemMsg.year}}-{{getMonth}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        itemMsg:{
            default:function(){
                return {
                    imgSrc:"",
                    title:"标题",
                    content:"内容内容内容内容内容内容内容内容",
                    year:"2018",
                    month:"6",
                    day:"25"
                }
            }
        }
    },
    data:function(){
        return {
        }
    },
    computed:{
        getMonth:function(){
            let month = this.itemMsg.month;
            month = Number.parseInt(month);
            return month<10 ? "0"+month:month;
        }
    }
}
</script>
<style scoped>
.item{font-size: 0;text-align:left;display: flex;display: -webkit-flex;padding:20px;box-shadow: 0 1px 5px rgba(100,100,100,0.1);background-color: #fff;align-content:center;align-items:center;margin-bottom: 20px;transition:transform 0.1s;}
.item-img{width:240px;text-align: center;display: inline-block;height: 140px;background-color:#eee;}
.item-img img{width: 100%;height: 100%;vertical-align: top;}
.item-con{width:780px;padding:0 20px;display: inline-block;}
.item-con h2{text-overflow:ellipsis;white-space:nowrap;overflow: hidden;font-size: 20px;color:#333;font-weight: normal;}
.item-con p{color:#828a92;-webkit-line-clamp:4;display: -webkit-box;overflow:hidden;-webkit-box-orient:vertical;text-align: justify;margin-top: 13px;line-height: 25px;}
.item-time{width:140px;text-align: center;display: inline-block;vertical-align: top;}
.item-time p{font-size: 60px;color:#0099ff;line-height: 55px;}
.item-time span{font-size: 24px;color:#c6c6c6;}
.item:hover{transform: scale(1.05);box-shadow: 0 1px 5px rgba(100,100,100,0.3);}
.item:hover h2{color:#0099ff;}
</style>


