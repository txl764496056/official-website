<template>
    <div class="item">
        <div v-show="itemMsg.imgSrc" class="item-img">
            <img  :src="itemMsg.imgSrc" alt="">
        </div>
        <div class="item-con">
            <h2>{{itemMsg.title}}</h2>
            <p>{{itemMsg.content}}</p>
        </div>
        <div class="item-time">
            <p>{{day}}</p>
            <span>{{year}}-{{getMonth}}</span>
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
                    time:"2013-06-4 0:0:0"
                }
            }
        }
    },
    data:function(){
        return {
            year:"2011",
            month:"8",
            day:"12"
        }
    },
    created:function(){
        this.getDate();
    },
    methods:{
        getDate:function(){
            let time = this.itemMsg.time;
            time = time.split("-");
            this.year = time[0];
            this.month = time[1]
            this.day = time[2].split(" ")[0];
        }
    },
    computed:{
        getMonth:function(){
            let month = this.month;
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
.item-con{width:780px;padding:0 20px;display: inline-block;flex:1}
.item-con h2{text-overflow:ellipsis;white-space:nowrap;overflow: hidden;font-size: 20px;color:#333;font-weight: normal;}
.item-con p{color:#828a92;-webkit-line-clamp:4;display: -webkit-box;overflow:hidden;-webkit-box-orient:vertical;text-align: justify;margin-top: 13px;line-height: 25px;}
.item-time{width:140px;text-align: center;display: inline-block;vertical-align: top;}
.item-time p{font-size: 60px;color:#0099ff;line-height: 55px;}
.item-time span{font-size: 24px;color:#c6c6c6;}
.item:hover{transform: scale(1.05);box-shadow: 0 1px 5px rgba(100,100,100,0.3);}
.item:hover h2{color:#0099ff;}
</style>


