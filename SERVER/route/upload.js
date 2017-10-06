const express = require('express')
const Router = express.Router()
const fs = require('fs')

Router.post('/', (req, res) => {

  let data = [];
  req.on('data', chunk => {
    data.push(chunk);
  })

  req.on('end', () => {
    console.log(Buffer.concat(data))
    fs.writeFile('hh.png', Buffer.concat(data), err => {
      console.log(err);
    })
    res.end('123')
  })

})

module.exports = Router