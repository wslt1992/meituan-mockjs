import Mock from 'mockjs';
import url from '../global/url'
//设置延迟
Mock.setup({
  timeout: '200-3000'
})
let Random = Mock.Random;
Mock.mock(url.index, {
  'name|3': 'fei', //这个定义数据的模板形式下面会介绍
  'age|20-30': 25,
})
Mock.mock(url.indexSwiper, {
  'url': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
})
Mock.mock(url.indexSwiper, {
  'url': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
})
Mock.mock(url.indexClass1, {
  'url': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
})
Mock.mock(url.indexClass2, {
  'url': [Random.cparagraph(1, 3), '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
})
Mock.mock(url.listing, {
  "list|10": [{
    'id|+1': 0,
    // 'img|1': ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],
    'img|1': ['../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg',],
    'shopname|1': [
      '正新鸡排',
      '撸天下音乐烧烤吧（坪洲店）',
      '串福居江边渔火（桃园店）',
      '大汗碳烤羊腿（坂田店）',
      '原石牛扒（龙华九方店）',
      '蓬客精品酒店(深圳北站店)',
      '喜发烧味', '永盛豆浆王（大芬店）',
      '秋菊螺蛳粉', '虾皇蟹将（泥岗店）',
      '深南玖月海鲜烧烤音乐餐吧',
      'Hui Hotel回酒店·La cafe自助餐',
      'UNIVERSAL CAFFEN BAR环球咖啡厅（海上世界店）'
    ],
    'price|1-1000.2': 1,
    'tips|1': [
        '龙岗区坂雪岗大道4003-11号（近华为单身公寓公交站台）',
        '福田区深南中路3024号中航城格兰云天大酒店2楼',
        '龙岗区信义假日名城锦绣园AS105号',
        '龙华区民治大道布龙路779-12号',
        '龙岗区龙岗中心城阳光天健城花园3栋78-82号商铺',
        '[新安]双人套餐，有赠品',
        '[观澜]海鲜大咖，建议2-3人使用', 
        '[2店通用]100元优惠代金券1张，可叠加',
        '[多城市]一人食升级套餐，提供免费WiFi', 
        '起送价格￥20|配送费￥6',
        '起送价格￥33|配送费￥9',
        '[3店通用]钜惠3-4人餐，提供免费WiFi',
        '双人套餐，提供免费WiFi'
      ],
      'distance|1-10.1-2':1,
      'sold|1-99999':1

  }]
})


/**
 * login登录
 */
Mock.mock(RegExp(url.login + ".*"), function(options) {
    console.log(options);
    let params = JSON.parse(options.body)
    console.log('usename-password',params.username,params.password)
    if(params.password==='123456'){
      return Mock.mock({
          state:200,
          "user": {
            'username': '@cname',
            'userId|+1': 888888
          }
        
      });
    }else{
      return Mock.mock({
        state:400,
      });
    }
    
  })
/**
 * order订单
 */
Mock.mock(RegExp(url.order + ".*"), function(options) {
  console.log(options);
  let params = JSON.parse(options.body)
  // console.log('usename-password',params.username,params.password)
  let classtify = '';
  switch(params.state){
    case 0:
    classtify = ['已完成','未付款','未使用','未评论','售后']
    break;
    case 1:
    classtify = ['未付款']
    break;
    case 2:
    classtify = ['未使用']
    break;
    case 3:
    classtify = ['未评论']
    break;
    case 4:
    classtify = ['售后']
    break;
  }
    return Mock.mock({
      "data|17":[{
        "shopname|1": ["正新鸡排","有趣烤鱼","美宜佳","华润万家","重庆火锅","四川辣酱"],
        "state|1": classtify,
        "price|1-1000": 234,
        // "time": "2018-03-24 18:34"
        "time|1": function(){
          return Random.datetime()
        }
      }]
        
    }) 
})