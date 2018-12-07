<template>
    <div class="title">
        <h2>{{titleCN}}</h2>
        <span></span>
        <p>{{titleEN}}</p>
    </div>
</template>
<script>
export default {
    props:{
        titleCN:{
            default:"中文标题"
        },
        titleEN:{
            default:"English title"
        }
    },
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
.title{text-align: center;}
.title h2{color:#333;font-weight: bold;font-size: 28px;letter-spacing: 1px;}
.title span{display: inline-block;width: 60px;height: 3px;background-color: #0099ff;margin:8px 0;}
.title p{color:#c6c6c6;font-size: 16px;}
</style>

