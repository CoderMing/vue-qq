const express = require('express')
const qr = require('qr-image')
const Router = express.Router()

Router.get('/', async(req, res) => {
  if (!req.query.text) {
    res.status(404).set('Content-Type', 'text/html;charset=utf-8').end('请确定text值非空！')
    return void 0
  }

  const reqStr = req.query.text
  let qrStr = qr.imageSync(reqStr, { type: 'png' })

  res
    .set('Content-Type', 'image/png')
    .end(qrStr)
})

module.exports = Router