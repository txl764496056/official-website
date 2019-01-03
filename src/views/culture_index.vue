<template>
    <div>
        <title1 class="page-title wow animated fadeInDown" titleEN="公司企业文化建设，员工万众一心" titleCN="企业文化"></title1>
        <!-- 列表 start -->
        <div class="company-details clear wow animated zoomIn">
            <div class="details-l scale">
                <img src="static/company_profile/culture_img.jpg" alt="">
            </div>
            <div class="details-r">
                <h2>团结、顽强、永不言弃！</h2>
                <ul>
                    <li v-for="(item,index) in details" :key="index">
                        <h3>
                            <i class="iconfont" :class="item.icon"></i>
                            {{item.title}}
                        </h3>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 列表 end -->
        <!-- 图片 start  -->
            <div class="culture-photos wow animated zoomIn">
				<h2>企业文化照片墙<router-link to="/company_culture_photos">查看更多></router-link></h2>
				<div class="culphoto-t">
					<div class="culphoto-tl">
						<img class="culphoto-tl" src="static/mayi.jpg" alt="">
					</div>
					<div class="culphoto-tr">
						<div class="culimgbox">
							<img src="static/home_img/a2.png" alt="">
						</div>
						<div class="culimgbox">
							<img src="static/home_img/a2.png" alt="">
						</div>
					</div>
				</div>  
				<div class="culphoto-b">
					<div class="culimgbox2">
						<img src="static/shake_hands2.jpg" alt="">
					</div>
					<div class="culimgbox2">
						<img src="static/shake_hands.jpg" alt="">
					</div>
					<div class="culimgbox3">
						<img src="static/shake_hands2.jpg" alt="">
					</div>
				</div>   
			</div>
        <!-- 图片end -->
    </div>
</template>
<script>
import axios from "axios"
import title1 from '../components/title1' //标题
export default {
    components:{
        "title1":title1
    },
    data:function(){
        return {
            details:[]
        }
    },
    created:function(){
        axios.get(this.$url.profileCulture).then((res)=>{
            let arr = res.data.profileCulture;
            arr.map(function(item,index){
                let str = "";
                switch(index){
                    case 0:
                        str = "icon-huizhang";
                        break;
                    case 1:
                        str = "icon-daohang";
                        break;
                    case 2:
                        str = "icon-baxin";
                        break;
                    case 3:
                        str = "icon-zhishipai";
                        break;
                    case 4:
                        str = "icon-shu";
                        break;
                    case 5:
                        str = "icon-zengdayinliang";
                        break;
                    default:
                        str = "";
                        break;
                }
                return item.icon = str;
            });
            this.details = arr;
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>
<style scoped>
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


