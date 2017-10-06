const mysql = require('mysql')
const config = require('../config/mysql.js')

let con = mysql.createConnection(config)
con.connect()

module.exports = con