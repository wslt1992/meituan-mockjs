import Mock from 'mockjs';
import url from '../global/url'
//设置延迟
Mock.setup({
  timeout: '200-1000'
})

var shaokaoImgs = [
  'https://p0.meituan.net/210.0/wmproductdwm/41e2d9014bb34cab377d902ec1e334fa307457.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/7d206c04c08eda38fd1d07b6273687e9294748.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/8849af26321b6ee73da6a98da2e451c9316010.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/4c2be009b5d9b207bfce9348eb6aa573284454.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/db7784eea83c7e1634557e5ad9a9c9cf225148.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/0d1ee4ab8e9546e2915da1d23c81733f336173.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/bd2c8c8b873628eee68736334f27d7de201865.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/b3b219bd3b0b7c3d27bc1c24b3702f1d172627.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/c20e9928418d79722836113d75733e11248478.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/a6cae48f590d5456dde7a2e7bb4cb846187787.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/b4b753efd7982b8bd4c36dbcc8505e58425880.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/dcbac7407e8c502e0f74fab2731dca1b300097.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/a4a3c851105f22f47ea5200ccaa6a33d515061.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/f28b7da424e0a7912e6e3317ebb9f9bb192280.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/6ac299c43788439544c0bdfe0ce02b4a259461.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/4dcc3e815018f2499ecc049d42da6d95285123.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/8d0f6a87f27a232e9964cf9dc785b37e393925.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/8e4a3223c951fef82d594355f545cad4225054.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/3d787452dd1a151657abc9f6bc2f2ba3205257.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/4b94efd122cde23ed7f96d214e87faa1181037.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/0b06fb5b1a941f35d4cffbfdd9bceaeb298817.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/2c9ae3a79504d03db2855ab067d79875309570.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/b0e977b4bfcd8f5dcbc66b5023e5c8a5241641.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/a2a69db7e22a6cda430e26941ff55d39196236.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/97288b83ff784e686d3d3caa6b56d09c126822.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/abd2a47418f1ba24385da62989bb4d5b267614.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/35968bcfe4942d883d15a07ef49556ba399938.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/37c1465bb566e92c181dd6456ef3519c240395.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/b2473608efe75c1b970fdbcdfb818863309417.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/d1a5b0f64ec98ba67cabcaf8c198fd0e205979.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/817fb273fd039ba7e7ae594125cd7d5a195437.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/793bc9d44a637bd0bb94f99fe75ec314201990.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/17fa0ee5ed196f7c5384124553ef29ad251528.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/1df9c69e1c257efcd40b1040fe18b3f7184380.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/72e544f12624cbd9e217d93e507edb46155662.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/b6d46aad61f6f1b05dade4b97e3e2453344252.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/60f388e7fd10792191c27e45b630b704214413.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/7ca2b519dca8afce1f42efbaf47421da180474.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/697cf21429bf99210d43f184bb1cc5a3344442.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/ce42e62e61660c7c6ec81206f9422419253332.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/ba6c007645067df55de7163595526629285869.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/596fee44d7f4a1b97ce9234c5637aa60185200.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/7082c386a5813c24404603a0746b5cbe201733.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/a48a1e30530d93c41781c5664e047710205471.jpg',
  'https://p1.meituan.net/210.0/xianfudwm/3ae591e2a3b042db24381d66d99cc0c1185338.jpg',
  'https://p0.meituan.net/210.0/xianfudwm/48ea897d75a66c19a69b7811090baf1b198437.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/d0ac759fc86b6f820d945ac48ed7091b334625.jpg',
  'https://p1.meituan.net/210.0/wmproductdwm/e225f2d99e913951edaa6cc65f06e5d1432329.jpg',
  'https://p0.meituan.net/210.0/wmproductdwm/0689ea1680a22d9656d4ff4965b4a337327151.jpg',
]

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
  "list|20": [{
    'id|+1': 0,
    'img|1': shaokaoImgs,
    // 'img|1': ['../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg','../assets/imgs/shop.jpg',],
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
            'userId|+1': 888888,
            'headerImg':'/static/imgs/header.jpg'
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
  // console.log(options);
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
      "data|10":[{
        "shopname": function(){
          return Random.ctitle(5,11)
        },
        "state|1": classtify,
        "price|1-1000": 234,
        // "time": "2018-03-24 18:34"
        "time|1": function(){
          return Random.datetime()
        }
      }]
        
    }) 
})


// 店铺开始

let leftArr=['烤肉类','蔬菜类','海鲜类','锡纸类','小炒类','酒水类'];
let index=0;
Mock.mock(url.shop, {
  
  "data|6":[{
    'fenlei':function(){
      if(index>=leftArr.length){
        index = 0;
      }
      return leftArr[index++];
    },
    'arr|10':[{
      'foodid|+1':10000,
      'img|1':shaokaoImgs,
      'price|89-200':100,
      'name|1':
          ['烤韭菜','羊肉串','鸡全翅','葱香豆皮','谈烤肥牛','葱香茄子','台湾热狗',
              '羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄','牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿','鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚','羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄',
              '牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿','鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚','羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄','牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿',
              '鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚'
          ,
              '烤韭菜','金针菇','娃娃菜','土豆片','四季豆','烤香菇',
              '青椒','烤面筋','葱香豆皮','香叶豆腐','葱香茄子','烤年糕',
              '玉米','油炸花生米','烤大葱','白干豆腐'
          ]                
    }]
  }]
  
  
})

// 店铺结束

//发现开始
let discoveryTitle = ['精选','爱美食','关注','出去浪','健康生活','变漂亮','看电影']
Mock.mock(url.discovery, {
  "data|7":[{
    'fenlei':function(){
      if(index>=discoveryTitle.length){
        index = 0;
      }
      return discoveryTitle[index++];
    },
    'arr|10':[{
      'imgs':function(){
          let arr = [];
          let length = _.random(1,3);
          length = 1<length?3:1;
          for(let i=0;i<length;i++){
            arr.push(shaokaoImgs[_.floor(Math.random()*shaokaoImgs.length)]);
          }
          return arr;
      },
      'title|1':
          ['教你一个鸡蛋的新吃法，连挑食的人都爱吃，太美味了！',
          '2个西红柿，1把金针菇，简单一做，美味下饭，好吃到想哭',
          '两块钱一斤，含钙量是牛肉的6倍，孩子猛长个就靠它，好爸妈首选',
          '柚子晚上吃变“毒柚子”，营养师：吃柚子这2个时间最适合！',
          '买酸奶一定要看这三个字 不然小心喝到“假酸奶”',
          '土豆别总是炒着吃，教你一个简单又好吃的做法',
          '可乐鸡翅怎么做好吃？',
          '油焖大虾：虾这样做！好吃到连壳都要吃掉，还不忘舔舔手指',
          '一整只鸡放进电饭锅，不加一滴水，想不到这么好吃，鲜嫩多汁',
          '不吃晚饭有什么好处？',
          '蒸包子用开水还是冷水？经过大厨提醒，才知一直放错！怪不得难吃',
          '儿童营养早餐一周不重样，不沾手，不发面，几分钟就上桌',
          '冬天炖羊肉汤时，不要直接炖，加上这一步，羊肉鲜嫩，无膻味',
          '小青柑茶要怎么泡？',
          '冬天就要吃这样的饭才过瘾，没想到竟然成网红菜了，懒人必备！',
          '韭菜盒子新做法，不用烫面，用手卷一卷，皮薄馅大满嘴香，很过瘾'
          ],
          'author|1':[
            '米粒日记',
            '艺麻麻爱美食',
            '孤单的食客',
            '半岛便利店',
            '泡圈圈',
            ' 赖皮美食',
            '孤单的食客',
            '盛京客',
            '叶子的小厨'
          ],
          'viewCount|1-99999':5             
    }]
  }]
})
// 发现结束