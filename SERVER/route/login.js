const express = require('express')
const cookieParser = require('cookie-parser')
const sqlCon = require('../database/db.js')
const Router = express.Router()

Router.post('/', async(req, res) => {

  let { user_id, user_passwd } = req.body
  let resData = {}



  // sql查询
  sqlCon.query(`SELECT * FROM user WHERE user_id='${user_id}'`, (err, result) => {
    if (err) {
      resData.state = 0
      console.log(err)
    }
    else {
      if (result.length) {
        resData.state = 1
        resData.data = result
      }
      else {
        resData.state = 0
        resData.reason = '尚未注册'
      }
    }

    res
      .status(200)
      .end(JSON.stringify(resData))
  })
})


module.exports = Router


