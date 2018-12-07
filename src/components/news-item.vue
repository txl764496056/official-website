<template>
    <div class="item">
        <div class="item-unit item-l">
            <p>27</p>
            <span>2018-06</span>
        </div>
        <div class="item-unit item-r">
            <h3>东华软件：拟6亿投建互联网医院</h3>
            <p>东华软件6月6日晚间公告，公司与山东岳经济开发区管委会签署协议。</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"news-item",
    data:function(){
        return{

        }
    }
}
</script>
<style scoped>
.item{background-color: #fff;font-size: 0;height: 110px;margin-bottom:20px;transition:transform 0.5s;text-align:left;}
/* .item a{display: block;font-size: 0;height: 100%;} */
.item-unit{display: inline-block;height: 100%;vertical-align: top;padding:0 20px;}
.item-l{width: 120px;border-right: 1px solid #f5f5f5;text-align: center;}
.item-l p{color:#0099ff;font-size: 28px;position: relative;margin-top:25px;transition:transform 0.5s;}
.item-l span{margin-top: 10px;font-size: 16px;color:#828a92;}
.item-r{width: 470px;}
.item-r h3{margin-top: 15px;font-size: 20px;color:#333;font-weight: normal;}
.item-r p{font-size: 16px;font-weight: normal;line-height: 25px;color:#828a92;margin-top: 5px;}
.item:hover h3{color:#0099ff;}
.item:hover{transform:translateX(-10px);box-shadow: 0 3px 5px rgba(100,100,100,0.1)}
</style>

