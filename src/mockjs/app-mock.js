import Mock from "mockjs";
import url from "./url.js";

let Random = Mock.Random;

// 新闻资讯列表
Mock.mock(url.news,{
    "newsList|10":[
        {
            "id": "@increment",
            "imgSrc|1":["static/home_img/a2.png","static/mayi.jpg"],
            "title|1":"@ctitle(3,15)",
            "content":"@cparagraph(3,20)",
            "time":"@now()"
        }
    ]
});

// 企业公告
Mock.mock(url.announce,{
    "announce|10":[
        {
            "id": "@increment",
            "title|1":"@ctitle(3,15)",
            "content":"@cparagraph(3,20)",
            "imgSrc|1":[
                "static/shake_hands2.jpg",
                "static/shake_hands.jpg"
            ],
            "time":"@now()"
        }
    ]
});

// 产品中心图片列表
Mock.mock(url.producterCenterList,{
    "producterCenterList|9":[
        {
            "id": "@increment",
            "title":"@ctitle(5,45)",
            "imgSrc|1":[
                "static/shake_hands2.jpg",
                "static/shake_hands.jpg"
            ],
            "content":"@cparagraph(3,20)",
            "time":"@date()",
            "num|1-1000":2
        }
    ]
});

// 商城列表
Mock.mock(url.mallList,{
    "mallList|4":[
        {
            "id": "@increment",
            "type":false,
            "imgSrc|1":["static/mall_img/image1.jpg","static/mall_img/image2.jpg","static/mall_img/image3.jpg","static/mall_img/image4.jpg"],
            "title|1":"@ctitle(3,15)",
            "content":"@cparagraph(3,20)",
            "price|1-200.2":55,
            "details|1":"@ctitle(3,30)"
        }
    ]
});

// 企业文化
Mock.mock(url.profileCulture,{
    "profileCulture":[
        {
            "title":"我们的使命",
            "content":"为全球中小微企和商务人士提供一款极致创新的移动商务工具，实现惠民惠国惠企。"
        },
        {
            "title":"我们的愿景",
            "content":"引领世界移动互联网，人物联网，实现线上线下全方位交易，解决中小微企和商务人士的痛点。"
        },
        {
            "title":"我们的目标",
            "content":"五年内争创上亿市值移动互联网公司。"
        },
        {
            "title":"我们的宗旨",
            "content":"感恩、创新、诚信、共赢。"
        },
        {
            "title":"我们的双心文化",
            "content":"孝心、爱心。"
        },
        {
            "title":"我们的口号",
            "content":"汇智能通，助您事业更成功。"
        }
    ]
});

// 产业布局信息
Mock.mock(url.dismsg,{
    "dismsg|1":[{
        "imgSrc|1":["static/home_img/a2.png","static/mayi.jpg"],
        "content":"@cparagraph(3,25)",
        "address|4":[
            {
                "area|1":"@region()",
                "PCD|1":"@county(true)"
            }
        ]
    }]
});

// 荣誉证书
Mock.mock(url.honors,{
    "honors|3":["static/mayi.jpg","static/shake_hands2.jpg","static/shake_hands.jpg"]
});

// 随机title
// function title(n,m){
//     let arr = [Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m),Random.ctitle(n,m)]; 
//     return  arr;
// }


