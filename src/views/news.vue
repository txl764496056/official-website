<template>
    <div class="news">
        <!-- banner start -->
        <a href="#news-content">
           <page-banner title='新闻资讯' customClass="news-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 列表 start -->
        <div id="news-content">
            <div class="container">
                <router-link v-for="(item,index) in newsList" :key="index" to="/">
                    <news-list-item :itemMsg="item"></news-list-item>
                </router-link>
            </div>
        </div>
        <!-- 列表 end -->
    </div>
</template>
<script>
import pageBanner from '../components/page-banner' //banner
import newsListItem from '../components/news-list-item' //新闻列表项
export default {
     components:{
        "page-banner":pageBanner,
        "news-list-item":newsListItem
    },
    data:function(){
        return{
            bannerContent:"整理并实时更新最核心最需要的公司新闻资讯",
            newsList:[
                {
                    imgSrc:"/static/home_img/a2.png",
                    title:"潘石屹：SOHO3Q不走并购路线 明年独立上市",
                    content:"潘石屹表示，在城市拓展中也遇到一些问题，推进进度没有想象中的快。离开了背景、上海，我们发现不合法的项目很多。潘石屹透露，没有竣工验收备案或没有房产证的项目在SOH3Q洽谈的项目中占比约80%，SOHO3Q页已经转变了目标租户的定位，成立之初它走的是解决创业企业办公问题的路线，单但它更在意公司规模在50-300人之间的公司。",
                    year:"2018",
                    month:"6",
                    day:"25"
                },
                {
                    imgSrc:"/static/home_img/a2.png",
                    title:"潘石屹：SOHO3Q不走并购路线 明年独立上市",
                    content:"潘石屹表示，在城市拓展中也遇到一些问题，推进进度没有想象中的快。离开了背景、上海，我们发现不合法的项目很多。潘石屹透露，没有竣工验收备案或没有房产证的项目在SOH3Q洽谈的项目中占比约80%，SOHO3Q页已经转变了目标租户的定位，成立之初它走的是解决创业企业办公问题的路线，单但它更在意公司规模在50-300人之间的公司。",
                    year:"2018",
                    month:"6",
                    day:"25"
                },
                {
                    imgSrc:"/static/home_img/a2.png",
                    title:"潘石屹：SOHO3Q不走并购路线 明年独立上市",
                    content:"潘石屹表示，在城市拓展中也遇到一些问题，推进进度没有想象中的快。离开了背景、上海，我们发现不合法的项目很多。潘石屹透露，没有竣工验收备案或没有房产证的项目在SOH3Q洽谈的项目中占比约80%，SOHO3Q页已经转变了目标租户的定位，成立之初它走的是解决创业企业办公问题的路线，单但它更在意公司规模在50-300人之间的公司。",
                    year:"2018",
                    month:"6",
                    day:"25"
                }
            ]
        }
    }
}
</script>
<style scoped>
#news-content{padding:60px 0;background-color: #f5f5f5;}
.news-banner{background: url(/static/news_img/news_bg.jpg) center center no-repeat;background-size:cover;}
</style>

