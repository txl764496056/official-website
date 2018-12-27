<template>
    <div class="profile-box">
        <!-- banner start -->
        <a href="#profile-content" class="scrollTo" @click="scrollTo()">
           <page-banner title='企业简介' customClass="profile-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start -->
        <div id="profile-content" class="profile-content container mtb50">
            <router-view/>
        </div>
        <!-- 内容 end -->
    </div>
</template>
<script>
import pageBanner from '../components/page-banner'
export default {
    components:{
        "page-banner":pageBanner
    },
    data:function(){
        return {
            bannerContent:"一个富有激情而又低调的团队，您的满意，是我们不懈的使命"
        }
    }
}
</script>
<style scoped>
.profile-box{text-align:left;}
.profile-banner{background: url("../assets/profile_banner.jpg") center center no-repeat;background-size:cover;}
.profile-content{padding:70px 0;}

</style>


