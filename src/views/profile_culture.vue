<template>
    <div>
        <title1 class="culture-title wow animated fadeInDown" titleEN="公司企业文化建设，员工万众一心" titleCN="企业文化"></title1>
        <!-- 列表 start -->
        <div class="company-details clear wow animated zoomIn">
            <div class="details-l scale">
                <img src="static/company_profile/culture_img.jpg" alt="">
            </div>
            <div class="details-r">
                <h2>团结、顽强、永不言弃！</h2>
                <ul>
                    <li>
                        <h3>
                            <i class="iconfont icon-huizhang"></i>
                            我们的使命
                        </h3>
                        <p>为全球中小微企和商务人士提供一款极致创新的移动商务工具，实现惠民惠国惠企。</p>
                    </li>
                    <li>
                        <h3>
                            <i class="iconfont icon-daohang"></i>
                            我们的愿景
                        </h3>
                        <p>引领世界移动互联网，人物联网，实现线上线下全方位交易，解决中小微企和商务人士的痛点。</p>
                    </li>
                    <li>
                        <h3>
                            <i class="iconfont icon-baxin"></i>
                            我们的目标
                        </h3>
                        <p>五年内争创上亿市值移动互联网公司。</p>
                    </li>
                    <li>
                        <h3>
                            <i class="iconfont icon-zhishipai"></i>
                            我们的宗旨
                        </h3>
                        <p>感恩、创新、诚信、共赢。</p>
                    </li>
                    <li>
                        <h3>
                            <i class="iconfont icon-shu"></i>
                            我们的双心文化
                        </h3>
                        <p>孝心、爱心。</p>
                    </li>
                    <li>
                        <h3>
                            <i class="iconfont icon-zengdayinliang"></i>
                            我们的口号
                        </h3>
                        <p>汇智能通，助您事业更成功。</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 列表 end -->
        <!-- 图片 start  -->
            <div class="culture-photos wow animated zoomIn">
				<h2>企业文化照片墙<a href="company_culture_photos.html">查看更多></a></h2>
				<div class="culphoto-t">
					<a class="culphoto-tl" href="#">
						<img src="static/mayi.jpg" alt="">
					</a>
					<div class="culphoto-tr">
						<a class="culimgbox" href="#">
							<img src="static/home_img/a2.png" alt="">
						</a>
						<a class="culimgbox" href="#">
							<img src="static/home_img/a2.png" alt="">
						</a>
					</div>
				</div>  
				<div class="culphoto-b">
					<a href="#" class="culimgbox2">
						<img src="static/shake_hands2.jpg" alt="">
					</a>
					<a href="#" class="culimgbox2">
						<img src="static/shake_hands.jpg" alt="">
					</a>
					<a href="#" class="culimgbox3">
						<img src="static/shake_hands2.jpg" alt="">
					</a>
				</div>   
			</div>
            <!-- 图片end -->
    </div>
</template>
<script>
import title1 from '../components/title1' //标题
export default {
    components:{
        "title1":title1
    },
    data:function(){
        return {

        }
    },
    mounted:function(){
    }
}
</script>
<style>
.culture-title{margin:30px 0 50px;}

.company-details{margin-top:40px;}
.details-l,.details-r{float: left;}
.details-l{width:500px;}
.details-l img{width:100%;}
.details-r{width:700px;padding-left: 70px;}
.details-r h2{font-size: 46px;font-weight: bold;color:#333;}
.details-r ul{margin-top: 60px;}
.details-r ul li{margin-bottom: 20px;position: relative;z-index: 10;}
.details-r ul li h3{color:#fff;background-color: #0099ff;width:320px;font-size: 20px;font-weight: bold;color:#fff;height: 45px;border-radius: 23px;line-height: 45px;position: relative;z-index: 15}
.details-r ul li h3 i{font-size: 28px;margin-left:10px;float: left;display: inline-block;margin-right: 10px;}
.details-r ul li p{font-size: 16px;color:#333;margin-top: 15px;font-weight: bold;position: relative;z-index: 20;margin-left: 20px;}

.culture-photos{margin-top: 85px;}
.culture-photos h2{font-size: 20px;font-weight: bold;color:#333;position: relative;margin-bottom: 15px;}
.culture-photos h2 a{display: inline-block;position: absolute;right: 0px;color:#828a92;font-size: 16px;font-weight: normal;}
.culture-photos h2 a:hover{color:#0099ff;}
.culphoto-t{font-size: 0;}
.culphoto-tl,.culphoto-tr{display: inline-block;overflow: hidden;}
.culphoto-tl{width:790px;margin-right: 10px;height: 400px;overflow: hidden;}
.culture-photos img{width:100%;height: 100%;transition:transform 0.3s;}
.culture-photos img:hover{transform: scale(1.1);filter:contrast(110%) brightness(110%);}
.culphoto-tr{width:400px;margin-bottom: -8px;}
.culimgbox{height: 194px;margin-bottom: 10px;overflow: hidden;display:block;}
.culphoto-b{margin-top: 10px;height: 270px;font-size: 0}
.culimgbox2,.culimgbox3{display: inline-block;height: 270px;overflow: hidden;}
.culimgbox2{width:390px;margin-right: 10px;}
.culimgbox3{width:400px;}
</style>

