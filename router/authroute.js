const express = require('express')
const authmiddleware = require('../middleware/authmiddleware')
const authroute = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../db')



authroute.post('/signup', authmiddleware, async (req, res) => {
    const { id, name, password, surname, role } = req.query
    const pass = await bcrypt.hash(password, 10)
    db.query(`INSERT INTO isciler (id,name,password,surname,role) VALUES ('${id}' , '${name}' , '${pass}' ,'${surname}' , '${role}')`, (err, result) => {
        if (err) return 'error'
        console.log('user is added');
    })
    res.end()
})



authroute.post('/signin' , async (req,res)=>{
    db.query(`SELECT * FROM isciler WHERE id = '${req.query.id}'` ,(err,result)=>{
        if(result.length == 0) {
         res.status(401).send('bele user yoxtur')
        } else {
         bcrypt.compare(req.query.password,result[0].password,(err,ismatch)=>{
             if(err) console.log('bcrypt error');
             if(ismatch){
                 const token = jwt.sign({id:result[0].id , role: result[0].role} , "CAVID" , {expiresIn:'7d'})
                 res.end(token)
             }
         })
        }
     })
})

module.exports = authroute