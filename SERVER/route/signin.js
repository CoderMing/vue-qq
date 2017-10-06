const express = require('express')
const cookieParser = require('cookie-parser')
const sqlCon = require('../database/db.js')
const Router = express.Router()

Router.post('/', async(req, res) => {
  console.log(req.body.user_id)

  let { user_id, user_passwd } = req.body
  let resData = {}


  console.log("message");

  // sql查询
  sqlCon.query(`INSERT INTO user ( user_id, user_passwd ) values ( ${user_id + ', ' + user_passwd} )`, (err, result) => {

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
    console.log("message");
    res
      .status(200)
      .end(JSON.stringify(resData))
  })

})

module.exports = Router


