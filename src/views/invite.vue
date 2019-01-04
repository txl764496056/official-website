<template>
    <div class="container">
        <div class="employ-con">
            <title1 class="page-title wow animated fadeInDown" titleEN="加入我们，使你的人生更精彩<" titleCN="招贤纳士"></title1>
        </div>
        <div class="employ-intro dis-flex wow animated zoomIn">
            <div class="employ-img scale">
                <img src="static/contractus_img/JOIN-US.png" alt="">
            </div>
            <div class="employ-intro-txt home-p3">
                由一群快乐的、有激情的、脚踏实地的年轻人组成，一起为了梦想而奋斗~<br/>
                我们向往自由，无论是宽松的管理体制还是融洽的同事关系……<br/>
                我们热爱生活，无论是去滑雪还是爬山还是野外拓展训练……<br/>
                我们追求极致，无论是理想还是实现自我价值……<br/>
                我们以人为本，为怀揣理想的人提供无限的职业发展空间和股权激励机制的福利待遇……<br/>
                认真工作，快乐生活，给您一个不一样的自己~<br/>
                无论您是工作多年的大咖还是初出茅庐的应届毕业生~<br/>
                无论您有无经验有无资质，只要您实事求是正直公正~<br/>
                汇能科技都期待您的到来，期待您的加入<br/>
            </div>
        </div>
        <div class="employ-pos">
            <h2 class="employ-p1 wow animated">招聘职位</h2>
            <div class="pos-type wow animated zoomIn">
                <a href="#" @click="scrollTo()" data-pos="总经理">总经理</a>
                <a href="#pos-ios" @click="scrollTo()" data-pos="高级iOS开发工程师">高级iOS开发工程师</a>
                <a href="#pos-java" @click="scrollTo()" data-pos="JAVA工程师">JAVA工程师</a>
                <a href="#" @click="scrollTo()" data-pos="分公司总经理">分公司总经理</a>
                <a href="#pos-php" @click="scrollTo()" data-pos="PHP工程师">PHP工程师</a>
                <a href="#" @click="scrollTo()" data-pos="大客户总监">大客户总监</a>
                <a href="#" @click="scrollTo()" data-pos="出纳">出纳</a>
                <a href="#" @click="scrollTo()" data-pos="域渠道拓展总监">域渠道拓展总监</a>
            </div>
            <div class="pos-item" id="pos-java">
                <hr>
                <h2>JAVA工程师</h2>
                <h3>岗位职责</h3>
                <p>1、开发和维护世界邦网站；</p>
                <p>2、负责网站架构/设计和开发；</p>
                <p>3、积极推动项目, 完成项目目标；
                <h3>任职要求：</h3>
                <p>1、有互联网网站开发经验最佳(例如人人、新浪微博、 Qzone类似互动网站)；</p>
                <p>2、有创新能力, 有独立思想；</p>
                <p>3、较好的沟通能力, 团队协作能力；</p>
                <p>4、非常熟悉互联网网站的开发，了解整个网站的组织和架构；</p>
                <p>5、非常熟悉Java语言中和互联网开发相关的知识；</p>
                <p>6、熟悉常用开发框架， 例如Spring Framework或类似框架；</p>
                <p>7、熟悉Mysql或类似数据库， 对NOSQL相关领域有了解；</p>
                <p>8、对缓存系统Memcache, redis等有一定的使用经验；</p>
                <p>9、有钻研精神， 对未知的领域有深入探索，学习的激情；</p>
                <p>10、快速学习，了解业界最新动态，不断提升自我；</p>
                <p>11、热爱旅游, 热爱摄影优先考虑。</p>
            </div>
            <div class="pos-item" id="pos-ios">
                <hr>
                <h2>iOS工程师</h2>
                <h3>岗位职责</h3>
                <p>1、开发和维护世界邦网站；</p>
                <p>2、负责网站架构/设计和开发；</p>
                <p>3、积极推动项目, 完成项目目标；</p>
                <h3>任职要求：</h3>
                <p>1、有互联网网站开发经验最佳(例如人人、新浪微博、 Qzone类似互动网站)；</p>
                <p>2、有创新能力, 有独立思想；</p>
                <p>3、较好的沟通能力, 团队协作能力；</p>
                <p>4、非常熟悉互联网网站的开发，了解整个网站的组织和架构；</p>
                <p>5、非常熟悉Java语言中和互联网开发相关的知识；</p>
                <p>6、熟悉常用开发框架， 例如Spring Framework或类似框架；</p>
                <p>7、熟悉Mysql或类似数据库， 对NOSQL相关领域有了解；</p>
                <p>8、对缓存系统Memcache, redis等有一定的使用经验；</p>
                <p>9、有钻研精神， 对未知的领域有深入探索，学习的激情；</p>
                <p>10、快速学习，了解业界最新动态，不断提升自我；</p>
                <p>11、热爱旅游, 热爱摄影优先考虑。</p>
            </div>
            <div class="pos-item" id="pos-php">
                <hr>
                <h2>PHP工程师</h2>
                <h3>岗位职责</h3>
                <p>1、开发和维护世界邦网站；</p>
                <p>2、负责网站架构/设计和开发；</p>
                <p>3、积极推动项目, 完成项目目标；</p>
                <h3>任职要求：</h3>
                <p>1、有互联网网站开发经验最佳(例如人人、新浪微博、 Qzone类似互动网站)；</p>
                <p>2、有创新能力, 有独立思想；</p>
                <p>3、较好的沟通能力, 团队协作能力；</p>
                <p>4、非常熟悉互联网网站的开发，了解整个网站的组织和架构；</p>
                <p>5、非常熟悉Java语言中和互联网开发相关的知识；</p>
                <p>6、熟悉常用开发框架， 例如Spring Framework或类似框架；</p>
                <p>7、熟悉Mysql或类似数据库， 对NOSQL相关领域有了解；</p>
                <p>8、对缓存系统Memcache, redis等有一定的使用经验；</p>
                <p>9、有钻研精神， 对未知的领域有深入探索，学习的激情；</p>
                <p>10、快速学习，了解业界最新动态，不断提升自我；</p>
                <p>11、热爱旅游, 热爱摄影优先考虑。</p>
            </div>
		</div>
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
    }
}
</script>
<style scoped>
.employ-con{margin: 50px 0;}
.employ-intro{font-size: 0}
.employ-img{width: 340px;height: 320px;margin-right: 20px;display: inline-block;}
.employ-img img{max-width: 100%;}
.employ-intro-txt{width: 840px;display: inline-block;}
.employ-intro-txt.home-p3{line-height: 40px;}
.employ-pos{margin-top: 30px;padding:50px 0;position: relative;z-index: 10;text-align:left;}
.employ-pos:before{content:"WE NEED YOU";color:#f1f1f1;font-size: 76px;letter-spacing: 2px;position: absolute;left:90px;font-weight: bold;z-index: 15;display: inline-block;top:-7px;}
.employ-p1{font-size: 20px;font-weight: bold;color:#333; z-index: 20;position: relative;}
.employ-p2{font-size: 16px;color:#333;font-weight: bold;margin: 20px 0 10px 0;}
.employ-p3 p{line-height: 35px;font-size: 16px;color:#333;}
.pos-type{margin-top: 40px;font-size:0;}
.pos-type a{display: inline-block;padding:0 20px;line-height: 40px;height: 40px;color:#fff;font-size: 16px;background-color: #b7bfc8;margin:0  30px 25px 0;border-radius: 20px;position: relative;}
.pos-type a:before{content:attr(data-pos);display: inline-block;position: absolute;left: 0;top: 0;width:100%;height:100%;background-color:#0099ff;z-index: 15;opacity: 0;color:#fff;text-align: center;line-height: 40px;transform:rotate(180deg) scale(0.1);transition: transform 0.5s;border-radius:20px;}
.pos-type a:hover:before{opacity: 1;transform:rotate(0deg) scale(1);}
.pos-type a:hover{background-color: transparent;}
.pos-item{padding-top: 30px;margin-bottom: 30px;}
.pos-item p{line-height: 35px;font-size: 16px;color:#333;}
.pos-item h2{font-size: 20px;font-weight: bold;color:#333; z-index: 20;position: relative;}
.pos-item h3{font-size: 16px;color:#333;font-weight: bold;margin: 20px 0 10px 0;}
.pos-item hr{border:none;border-top: 1px solid #e6e6e6;height:0;margin-bottom: 40px;}
</style>


