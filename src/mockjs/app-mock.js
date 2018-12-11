import Mock from "mockjs";
import url from "./url.js";

let Random = Mock.Random;

Mock.mock(url.news,{
    "newsList|3":[
        {
            "imgSrc|1":["/static/home_img/a2.png"],
            "title":Random.ctitle(3,20),
            "content":Random.cparagraph(),
            "time":Random.now()
        }
    ]
});