import Mock from "mockjs";
import url from "../global/url";

let Random = Mock.Random;

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

// 搜藏商家
Mock.mock(url.shops,{
	"shops|4":[
		{
			"title|1":Random.ctitle(3,20),
			"stars|0-5.0-1":1,
			"address|1":Random.csentence(),
			"distance|0-20.0-1":1,
			"averageConsume|0-1000.0-2":1
		}	
	]
})