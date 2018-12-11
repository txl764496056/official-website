<template>
    <div class="profile-box">
        <!-- banner start -->
        <a href="#profile-content">
           <page-banner title='企业简介' customClass="profile-banner" :content="bannerContent"></page-banner>
        </a>
        <!-- banner end -->
        <!-- 内容 start -->
        <div id="profile-content" class="profile-content container mtb50">
            <div class="since wow animated fadeInDown">SINCE 2017</div>
            <div class="profile-title wow animated fadeInDown">
                深圳前海汇能科技产业有限公司
            </div>
            <div class="profile-content1 mart3 dis-flex wow animated zoomIn">
                <div class="pro-content1-txt txtidt profile-txt1">
                    深圳前海汇能科技产业有限公司于2017年3月22日在改革开放前沿阵地，软件的摇篮————"深圳"成立，公司简称"汇能科技"。汇能科技位于宝安区西乡街道，此处环境优美，四通八达，交通便利，大厦入驻的大多都是享受国家政府补贴的高新互联网企业。2017年4月15日汇能科技隆重开业。汇能科技作为一家专业的手机<a href="#">APP客户端开发</a>和<a href="#">计算机软件技术开发</a>的新型综合性企业，以强大的资源整合能力和超前的互联网新思维开发了这款极致创新的商务工作软件"汇智能通",这款手机APP将<a href="#">商务形象展示</a>、<a href="#">信息交流</a>、<a href="#">资源对接</a>、<a href="#">工作学习</a>集于一体，以"精美的品牌微网功能、超强无上限人脉功能、现代科技通讯电话功能、强大的群管理功能、精准人脉定位、个性化软文推广、资源共享功能和精彩的商学院育才"等八大功能为核心，解决商务人士的痛点和需求点，全方位助力四亿以上的商务人士工作难题。
                </div>
                <div class="pro-img">
                    <img src="static/company_profile/profile_img1.png" alt="">
                </div>
            </div>
            <div class="profile-content2">
                <p>2017年4月15日在深圳宝利来国际大酒店举行开业庆典，2017年7月17日在深圳求水山酒店举行“三千人”汇智能通全国联创人峰会，2017年9月26日在北京举行汇智能通APP产品上线新闻发布会。汇能科技积极响应“大众创业、万众创新”的号召，秉承“感恩、创新、诚信、共赢”的宗旨，以“孝心、爱心”的双心文化倡导创立企业，以“汇集能量，共创辉煌”解决传统行业在移动互联网浪潮中面临的热点品牌推广、资源整合等各方面的难题。为120万的汇能创客提供创业平台，为解决社会环保、就业和国民生产力做出应有的贡献。</p>
                <img src="static/company_profile/profile_img2.jpg" alt="">
                <p><span>技术实力：</span>创始人兼CEO杨体春准备了五年半的时间，携手国内30多位顶尖级研发人员团队，开发出一款全球极致创新的商务工作软件～“汇智能通”，技术团队均来自中国科学院。</p>
                
                <p><span>十大分公司：</span>华北分公司，华南分公司，西北分公司，西南分公司，华东分公司，北京分公司，天津分公司，重庆分公司，深圳分公司，上海分公司。</p>
                <img src="static/company_profile/profile_img3.jpg" alt="">
                <b>2018年4月16日汇能科技周年庆典</b>
                <p>创始人兼职CEO杨体春被2018年华人楷模理事会授予“2017华人楷模先锋人物”；他是中华杨氏宗亲联谊总会副会长，同时也是中国拥军优属基金会关爱消防专项基金管理委员会社工部 副秘书长兼副部长。</p>
            </div>
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
            bannerContent:"汇能科技，一个富有激情而又低调的团队，您的满意，是我们不懈的使命"
        }
    }
}
</script>
<style scoped>
.profile-box{text-align:left;}
.profile-banner{background: url("../assets/profile_banner.jpg") center center no-repeat;background-size:cover;}
.profile-content{padding:70px 0;}
.since{font-size: 73px;color:#eeebe9;letter-spacing: 2px;font-weight: bold;}
.profile-title{color:#333;font-size: 30px;letter-spacing: 1px;padding:6px 0;border-bottom: 2px solid #0099ff;width:610px;}
.mart3{margin-top: 30px;}
.mart1{margin-top: 10px;}
.profile-txt1{color:#333;font-size: 20px;line-height: 35px;text-align: justify;}
.profile-txt1.profile-txt2{text-align: center;}
.profile-txt1 span{font-size: 20px;color:#0099ff;}
.profile-content1{justify-content: space-between;font-size: 0}
.pro-content1-txt{width:610px;display: inline-block;}
.pro-content1-txt a{color:#0099ff;font-size: 20px;}
.pro-content1-txt a:hover{color:#fa8700;}
.pro-img{text-align: center;width: 560px;display: inline-block;margin-left: 15px;}
.pro-img img{max-width: 100%;}
.profile-content2{text-align: center;}
.profile-content2 p{color:#333;font-size: 20px;line-height: 35px;text-align: justify;margin-top: 30px;margin-bottom: 10px;}
.profile-content2 span{font-size: 20px;color:#0099ff;}
.profile-content2 img{max-width:100%;}
.profile-content2 b{display:block;font-weight: normal;text-align: center;margin:20px 0;font-size: 20px;}
</style>


