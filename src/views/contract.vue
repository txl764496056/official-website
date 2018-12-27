<template>
    <div class="contract-box">
        <!-- banner start -->
        <a href="#contract-us" class="scrollTo" @click="scrollTo()">
            <page-banner title='联系我们' customClass="contract-banner" content="往下可以轻松的联系我们哦"></page-banner>
        </a>
        <!-- banner end -->
        <div id="contract-us" class="contract-type container">
            <contact-item title="公司地址"></contact-item>
            <contact-item title="联系方式" bgColor="bg-color2">
                <slot>
                    <p>联系电话：0755-85000090</p>
					<p>E-mail: admin@8888i.com</p>
					<p>QQ:160939872</p>
                </slot>
            </contact-item>
            <contact-item title="微信公众号" bgColor="bg-color3">
                <slot>
                    <img class="web-code" src="static/webchat_code.png" alt="">
                </slot>
            </contact-item>
        </div>
        <div class="message-map clear container">
            <div class="message">
                <h2>在线提交您的留言</h2>
                <div class="mes-unit clear">
                    <label for="name">您的称呼:</label>
                    <input type="text" placeholder="请输入您的称呼">
                    <span>*</span>
                </div>
                <div class="mes-unit clear">
                    <label for="name">您的电话:</label>
                    <input type="text" placeholder="请输入您的电话">
                    <span>*</span>
                </div>
                <div class="mes-unit mes-con clear">
                    <label for="name">留言内容:</label>
                    <textarea type="text" placeholder="请输入您的留言"></textarea>
                    <b>0/300</b>
                </div>
                <div class="mes-btn">
                    <button>提交</button>
                </div>
            </div>
            <div class="map">
                <h2>在线地图</h2>
                <div class="map-img">
                    <img src="static/map.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pageBanner from '../components/page-banner' //内页banner
import contactItem from '../components/contract-item' //联系方式
export default {
    components:{
        "page-banner":pageBanner,
        "contact-item":contactItem
    },
    data:function(){
        return {
        }
    },
    methods:{
    }
}
</script>
<style scoped>
.contract-banner{background:url(../assets/comtract_us_bg.jpg) center center no-repeat;background-size:cover;}
.contract-type{display:flex;justify-content: space-between;margin:100px auto 50px;}
.web-code{width:200px;height:200px;}
.message-map{margin-top: 60px;text-align: left;margin-bottom:50px;}
.message,.map{float: left;}
.message{width:540px;margin-right: 30px;}
.message-map h2{font-size: 24px;font-weight: normal;color:#333;letter-spacing: 1px;margin-bottom: 20px;}
.map{width:630px;}
.mes-unit{line-height: 50px;margin-bottom: 10px;position: relative;}
.mes-unit label{display: inline-block;width: 14%;letter-spacing: 1px;}
.mes-unit input,.mes-unit textarea{display: inline-block;border:1px solid #d8d8d8;color:#333;padding:0 15px;overflow: auto;}
.mes-unit input{width: 60%;height: 50px;}
.mes-unit textarea{width: 80%;max-width:80%;padding:10px 10px 30px;min-width:80%;min-height:230px;}
.mes-con label,.mes-con textarea{vertical-align: top;line-height: normal;}
.mes-unit span{color:#ff0000;}
.mes-unit b{position: absolute;right: 52px;bottom:-5px;font-weight: normal;font-size: 18px;color:#828a92;width:74%;background-color: #fff;bottom:1px;text-align: right;line-height: 35px;}
.mes-btn{width:430px;line-height:75px;height: 75px;text-align: center;margin-left: 80px;background-color: #0099ff;margin-top: 40px;position: relative;z-index: 10;overflow:hidden;}
.mes-btn button{color:#fff;font-size: 28px;letter-spacing: 1px;z-index: 20;position: relative;width:100%;height: 100%;border:none; background-color: transparent;}
.mes-btn::before{position: absolute;left: 50%;top:50%;width:100%;height: 100%;background-color: #007ed2;content:attr(data-sub);display: inline-block;z-index: 15;width:10px;height: 10px;margin-top: -5px;margin-left: -5px;transition:transform 0.5s;border-radius: 50%;opacity: 0;}
.mes-btn:hover::before{transform:scale(45);opacity: 1;}
.map-img{width:640px;height: 480px;}
.map-img img{width:100%;height: 100%;}
#submit-mask{padding:35px;border-radius: 5px;}
.submit-layer.layui-layer{border-radius: 5px;text-align: center;}
#submit-mask i{display: inline-block;width:68px;height: 68px;border-radius: 50%;border:3px solid #d9f3fd;text-align: center;line-height: 62px;font-size: 45px;color:#0099ff;}
#submit-mask p{color:#828a92;font-size: 16px;margin-top: 8px;}
</style>


