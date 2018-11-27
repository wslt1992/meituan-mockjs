import Mock from "mockjs";
import url from "../global/url";

let Random = Mock.Random;

// 随机title
function randomTitle(){
    let title = Random.ctitle();
    return title;
}

// 随机title
function randomTitle2(min,max){
    let arr = [Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),Random.ctitle(min,max),];
    return arr;
}

Mock.mock(url.users,{
    "usermsg|1":[
        {
            username:'森林系女孩',
            userpass:'txl'
        },
        {
            username:'谁能走进我心里',
            userpass:'123'
        },
        {
            username:'何须执手问年华',
            userpass:'txl'
        },
        {
            username:'莫忘初心',
            userpass:'123456'
        },
        {
            username:'对不起你踩到了我的底线',
            userpass:'456'
        },
        {
            username:'耐性与骨气',
            userpass:'789'
        },
        {
            username:'帅得无药可救',
            userpass:'5555'
        }
    ]
})

// 收藏商家，最近浏览
Mock.mock(url.shops,{
	"shops|3-6":[
		{
			"title|1":Random.ctitle(3,20),
            "stars|0-5.0-1":1,
			"address|1":[
                "江汉 串串香",
                "光谷 麻辣烫",
                "杨家湾 烧烤",
                "雄楚大道 牛肉火锅"
            ],
			"distance|0-20.0-1":1,
			"averageConsume|0-1000.0-2":1
		}	
	]
})

// 收藏商品
Mock.mock(url.goods,{
    "goods|3":[
        {
            "title|1":Random.ctitle(4,20),
            "distance|0-50.0-1":1,
            "discountPrice|0-200.0-2":1,
            "originalPrice|200-400.0-2":1,
            "details|1":Random.csentence(5,30)
        }
    ]
});

// 狠优惠
Mock.mock(url.discounts,{
    "discounts|3-5":[
        {
            "title|1":randomTitle,
            "tips|1":randomTitle,
            "address|1":["光谷 步行街","光谷","雄楚大道","江汉","江汉 汉正街"],
            "disPrice|0-50.0-1":1,
            "origPrice|50-100.0-1":1,
            "num|0-200.0-1":1,
            "discount|1-9.0-1":1
        }
    ]
});

// 有格调
Mock.mock(url.leisures,{
    "leisures|3-5":[
        {
            "title|1":randomTitle,
            "tips|1":randomTitle,
            "address|1":["光谷 步行街","光谷","雄楚大道","江汉","江汉 汉正街"],
            "price|0-500.0-1":1
        }
    ]
});

// 去哪儿
Mock.mock(url.scenerys,{
    "scenerys|3-5":[
        {
            "title|1":randomTitle2(3,6),
            "content|1":randomTitle2(5,14),
            "tips|1":randomTitle2(4,6)
        }
    ]
});