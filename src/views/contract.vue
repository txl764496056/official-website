<template>
    <div class="contract-box">
        <!-- banner start -->
        <a href="#contract-us" class="scrollTo">
            <page-banner title='联系我们' customClass="contract-banner" content="往下可以轻松的联系我们哦"></page-banner>
        </a>
        <!-- banner end -->
    </div>
</template>
<script>
import pageBanner from '../components/page-banner' //内页banner
export default {
    components:{
        "page-banner":pageBanner
    },
    data:function(){
        
    }
}
</script>
<style scoped>
.contract-banner{background:url(../assets/comtract_us_bg.jpg) center center no-repeat;background-size:cover;}
</style>


