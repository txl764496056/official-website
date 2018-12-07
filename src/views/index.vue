<template>
    <div class="home">
        <!-- 轮播 -->
        <banner-carousel>
            <carousel-item v-for="(item,index) in bannerImg" :key="index">
                <img :src="item" alt="">
            </carousel-item>
        </banner-carousel>
          <div class="container">
            <!-- 包年电话 -->
            <ad-item></ad-item>
            <!--  丰富人脉 -->
            <ad-item>
                <template slot="ad-l">
                    <img src="/static/home_img/card.png" alt="">
                </template>
                <template slot="ad-r">
                    <h2>开拓丰富人脉</h2>
                    <p>主要以名片形式来获取组成自己的人脉</p>
                    <p>是商务人士必备的领域</p>
                    <p>快速积累人脉，通过精准定位</p>
                    <p>实现您人脉资源无限化</p>
                </template>
            </ad-item>
            <!--  全球直播 -->
            <ad-item>
                <template slot="ad-l">
                <h2>全球最干净直播</h2>
                <p>随时随地，想学就学，免费充电</p>
                <p>发出企业的声音</p>
                </template>
                <template slot="ad-r">
                <img src="/static/home_img/live.png" alt="">
                </template>
            </ad-item>
            </div>
            <!-- 卡片轮播 start-->
            <div class="expert-team">
                <div class="container wow animated zoomIn">
                <h2>来自企业一线的资深技术专家团队</h2>
                    <h3>我们拥有前沿专业视野、国际化资深团队、出色的创意能力及执行力、不断拓展设计服务的内涵与外延</h3>
                <div class="epxert-box">
                    <el-carousel :interval="4000" type="card" height="560px">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <div class="card-item">
                            <img src="/static/home_img/a2.png" alt="">
                            <h2>杨体春</h2>
                            <span>YANG TI CHUN</span>
                            <p>汇能科技创始人兼CEO</p>
                            <div class="personal-details">
                            <p>
                                1创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工部副秘书长兼副部长，创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工部副秘书长兼副部长，创始人兼职CEO杨体春被2018年华人楷模，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工人。
                            </p>
                            </div>
                        </div>
                    </el-carousel-item>
                    </el-carousel>
                </div>
                </div>
            </div>
            <!-- 卡片轮播 end-->
            <!-- 新闻 start -->
            <div class="news">
                <div class="container">
                    <title1 class="wow animated fadeInDown" titleEN="NEW INFORMATION" titleCN="新闻资讯"></title1>
                <div class="home-more">
                    <a class="animated wow swing" href="#">查看更多></a>
                </div>
                <div class="news-l news-unit wow animated fadeInLeft">
                    <h3>三六零：非公开发行股票申请获受理</h3>
                    <span>2018-06-13</span>
                    <div class="news-l-img">
                    <img src="/static/home_img/new_img.png" alt="">
                    </div>
                    <p>三零六公司非公开发行股票申请获得证监会受理。公司拟募资不超过108亿元，用于网络空间安全研发中心等9大项目。</p>
                </div>
                <div class="news-r news-unit wow animated fadeInRight">
                    <router-link v-for="(item,index) in 4" :key="index" to="/">
                        <news-item></news-item>
                    </router-link>
                </div>
                </div>
            </div>
            <!-- 新闻 end -->
    </div>
</template>
<script>
import bannerCarousel from "../components/banner-carousel" //轮播
import carouselItem from "../components/carousel-item" //轮播项
import adItem from '../components/ad-item' 
import title1 from '../components/title1' //标题
import newsItem from '../components/news-item' //新闻列表项
export default {
    components:{
        "banner-carousel":bannerCarousel,
        "carousel-item":carouselItem,
        "ad-item":adItem,
        "title1":title1,
        "news-item":newsItem
    },
    data:function(){
        return {
            bannerImg:["/static/home_img/banner1.jpg","/static/home_img/banner2.jpg","/static/home_img/banner3.jpg"]
        }
    }
}
</script>
<style scoped>
/* 卡片轮播 start*/
.epxert-box{position: relative;margin:0 auto;height: 625px;margin-top: 65px;}
/* 标题 */
.expert-team{background: url(/static/home_img/team_bg.jpg) center top no-repeat;padding-top: 50px;padding-bottom: 10px;background-color:#01497B;}
.expert-team h2{color:#fff;font-size: 30px;text-align: center;;font-weight: bold;}
.expert-team h3{color:#a4ccf5;font-size: 24px;text-align: center;margin-top: 20px;font-weight: normal;}
/* 卡片 */
.el-carousel__mask{background-color:transparent;}
.card-item{width:450px;margin:0 auto;border-radius: 5px;background-color: #fff;text-align: center;font-weight: bold;font-size: 30px;list-style: none;text-align: center;border-radius: 8px;overflow:hidden;min-height: 480px;}
.card-item img{width:164px;height: 164px;border-radius: 50%;margin-top: 30px;transition:1s;}
.card-item h2{font-size: 24px;color:#333;margin-top: 15px;font-weight: normal;}
.card-item span{font-size: 16px;color:#333;text-transform:uppercase;font-weight:normal;display: block;margin-top: 8px;}
.card-item>p{color:#828a92;font-size: 24px;margin-top: 40px;font-weight: normal;}
.personal-details{background-color: #0099ff;border-radius: 0 0 8px 8px;margin-top: 20px; overflow:hidden; height: 0px;  }
.personal-details p{color:#fff;font-size: 16px;line-height:27px;text-indent: 2em;padding:15px 20px;font-weight:normal;text-align: justify;border-radius: 0 0 8px 8px;}
.card-item:hover img{border-radius: 50% 0 50% 0;border-bottom:4px solid rgba(0,153,255,1);}
/* 卡片选中样式*/
.el-carousel__item--card.is-active .card-item{margin-top: -30px;box-shadow: 0px 10px 60px rgba(0,153,255,0.3);}
.el-carousel__item--card.is-active .card-item h2,.el-carousel__item--card.is-active .card-item span,.el-carousel__item--card.is-active .card-item>p{color:#0099ff;}
.el-carousel__item--card.is-active .card-item>p{margin-top: 10px;}
.el-carousel__item--card.is-active .card-item img{margin-top: 60px;}
.el-carousel__item--card.is-active .card-item .personal-details{ height: 220px;  transition:height 0.5s; transition-delay: 0.5s;}
/* 左右箭头 */
.el-carousel__arrow--right{right:65px;}
.el-carousel__arrow--left{left:65px;}
.el-carousel__arrow{width:60px;height:60px;top:calc(50% - 30px);}
.el-carousel__arrow i{font-size:40px;}
/* 控制器 */
.el-carousel__indicators.el-carousel__indicators--outside{display:none;}
/* 卡片轮播 start*/

/* 新闻 */
.news{padding:70px 0;background-color: #f5f5f5;overflow-x: hidden;}
.news .container{font-size: 0}
.home-more{text-align: right;margin:25px 0;}
.home-more a{color:#828a92;font-size: 16px;display: inline-block;}
.home-more a:hover{color:#0099ff;}
.news-l{margin-right: 20px;padding:30px 40px;background-color: #fff;min-height: 500px;}
.news-l h3{color:#333;font-size: 20px;}
.news-l span{font-size: 16px;margin-top: 10px;color:#828a92;display: inline-block;}
.news-l-img{width:510px;height: 298px;margin-top: 10px;position:relative;overflow: hidden;}
.news-l-img img{width: 100%;height: 100%;transition:all 1s;}
.news-l-img:hover img{transform:scale(1.2);}
.news-l:hover {box-shadow: 0 3px 5px rgba(100,100,100,0.1);}
.news-unit{display: inline-block;width:590px;vertical-align: top;}
.news-r .news-item{margin-bottom:20px;}
</style>


