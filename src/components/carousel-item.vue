<template>
    <div class="carousel-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"carousel-item",
    data:function(){
        return {
            
        }
    }
}
</script>
<style scoped>
.carousel-item{font-size:0;position:relative;width:10%;height:100%;float:left;}
.carousel-item>*{font-size:14px;}
.carousel-item img{width:100%;}
</style>


