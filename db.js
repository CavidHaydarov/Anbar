const mysql = require('mysql')
const db = mysql.createConnection({
    database:'anbar_api',
    password:'',
    user:'root',
    host:'localhost',
    port:3306
})

db.connect((err,result)=>{
    if(err) return 'error'
    console.log('db is connected');
})

module.exports = db