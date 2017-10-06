const routers = [{ 
    conf: require('./qrcode.js'),
    url : '/qrcode'
  }, {
    conf: require('./qzone.js'),
    url : '/qzone'
  }, {
    conf: require('./login.js'),
    url : '/login'
  }, {
    conf: require('./upload.js'),
    url : '/upload'
  }
]


module.exports = app => {
  routers.forEach((router, index) => {
    if (router.url && router.conf) {
      app.use(router.url, router.conf)
    }
    else {
      console.log(`第${index + 1}个路由配置出错：缺少
        ${!router.url ?
            router.conf ?
              '路径配置' :
              '路径配置和配置文件' :
            '配置文件'}`);
    }
  })
}