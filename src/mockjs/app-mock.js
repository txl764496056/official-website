import Mock from "mockjs";
import url from "./url.js";

let Random = Mock.Random;

// 新闻资讯列表
Mock.mock(url.news,{
    "newsList|10":[
        {
            "imgSrc|1":["static/home_img/a2.png","static/mayi.jpg"],
            "title":Random.ctitle(3,20),
            "content":Random.cparagraph(),
            "time":Random.now()
        }
    ]
});
// 产品中心擦片列表
Mock.mock(url.producterCenterList,{
    "producterCenterList|9":[
        {
            "title":Random.ctitle(3,15),
            "imgSrc|1":[
                "static/shake_hands2.jpg",
                "static/shake_hands.jpg"
            ]
        }
    ]
});
