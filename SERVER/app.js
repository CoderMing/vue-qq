const app = require('express')()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const router = require('./route/index.js')
const conf = require('./config/server.js')


app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Credentials", true) //可以带cookies
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // 中间件

app.all('*', (req, res, next) => {
  console.log(req.cookies);
  if (!req.cookies.userId) {
    res.cookie('userId', Math.floor(Math.random() * 1e10) + '', {
      maxAge: 1000 * 60 * 60 * 24 * 30 + ''
    })
  }
  next()
})


router(app) // 路由
app.listen(conf.port, () => {
  console.log(`运行在${conf.port}端口`)
})
