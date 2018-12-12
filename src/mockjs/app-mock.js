import Mock from "mockjs";
import url from "./url.js";

let Random = Mock.Random;

// 新闻资讯列表
Mock.mock(url.news,{
    "newsList|10":[
        {
            "imgSrc|1":["static/home_img/a2.png","static/mayi.jpg"],
            "title|1":title(3,15),
            "content":Random.cparagraph(),
            "time":Random.now()
        }
    ]
});

// 产品中心擦片列表
Mock.mock(url.producterCenterList,{
    "producterCenterList|9":[
        {
            "title|1":title(3,15),
            "imgSrc|1":[
                "static/shake_hands2.jpg",
                "static/shake_hands.jpg"
            ]
        }
    ]
});

// 商城列表
Mock.mock(url.mallList,{
    "mallList|4":[
        {
            "type":false,
            "imgSrc|1":["static/mall_img/image1.jpg","static/mall_img/image2.jpg","static/mall_img/image3.jpg","static/mall_img/image4.jpg"],
            "title|1":title(3,15),
            "price|1-200.2":55,
            "details|1":title(3,30)
        }
    ]
});

// 随机title
function title(n,m){
    let arr = [Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m)]; 
    return  arr;
}