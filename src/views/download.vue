<template>
    <div class="download-box">
        <!-- banner start -->
        <a href="#app-download" class="scrollTo" @click="scrollTo()">
             <page-banner title='客户端下载' customClass="app-banner" content="最新版客户端"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start -->
        <div id="app-download">
            <div class="container app-down">
                <div class="app-details clear">
                    <div class="app-dl">
                        <img src="static/app_img.png" alt="">
                    </div>
                    <div class="app-dr">
                        <h2>移动客户端下载</h2>
                        <div class="app-code">
                            <img src="static/app_code.png" alt="">
                            <p>扫描二维码下载APP</p>
                        </div>
                        <div class="down-btn">
                            <a class="ip-btn" target="_blank" href="#">
                                <i class="iconfont icon-apple"></i>
                                <span>iPhone版下载</span>
                            </a>
                            <a class="and-btn" target="_blank" href="#">
                                <i class="iconfont icon-android"></i>
                                <span>Android版下载</span>
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    应用介绍：全国商务精英都在推荐使用，从在线沟通，拓展商务人脉，到发布资源、需求，撰写推广软文，在线直播，都能实现了！资源人脉一键在手，助力营销人员和中小企业腾飞。
                </p>
            </div>
        </div>
        <!-- 内容 end -->
    </div>
</template>
<script>
import pageBanner from '../components/page-banner' //内页banner
export default {
    components:{
        "page-banner":pageBanner
    },
    data:function(){
        return {

        }
    }
}
</script>
<style scoped>
.app-banner{background:url(../assets/app_download_banner.jpg) center center no-repeat;background-size: cover;}
#app-download{padding:150px 0;}
.app-dl,.app-dr{float: left;}
.app-dl{width:580px;}
.app-dl img{width:100%;transition:transform 0.3s;}
.app-dl:hover img{transform:scale(1.1);}
.app-dr{width:620px;text-align: center;}
.app-dr h2{font-size: 46px;color:#333;font-weight: normal;}
.app-code{border:2px solid #f0f0f0;width:275px;padding:20px;margin:0 auto;margin-top: 25px;} 
.app-code img{width:100%;}
.app-code p{font-size: 16px;color:#828a92;margin-top: 10px;}
.down-btn{margin-top: 60px;}
.down-btn a{height: 65px;line-height: 65px;color:#fff;text-align: center;padding:0 30px;border-radius: 33px;border:none;transition: all 0.5s;position: relative;z-index: 10;overflow: hidden;display: inline-block;}
.down-btn a:after{position: absolute;left: 50%;top: 50%;margin-left: -5px;margin-top: -5px;width:10px;height: 10px;content: "";display: inline-block;background-color: #0099ff;opacity: 0;transition: transform 0.5s;z-index: 15;border-radius: 50%;}
.down-btn a span{font-size: 22px;letter-spacing: 1px;position: relative;z-index: 20;}
.down-btn a i{font-size: 34px;float: left;margin-right: 10px;position: relative;z-index: 20;}
a.ip-btn{background-color: #7c9dc5;margin-right: 60px;}
a.and-btn{background-color: #7cc1c5;}
.down-btn a:hover:after{transform:scale(30);opacity: 1}
.app-down p{font-size: 16px;line-height: 25px;color:#828a92;margin-top: 5px;}
.app-details{margin-bottom:25px;}
</style>


