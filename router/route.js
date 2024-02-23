const express = require('express')
const authmiddleware = require('../middleware/authmiddleware')
const AnbarModel = require('../models/anbarModel')
const route = express.Router()


route.post('/insertanbar' ,authmiddleware, (req,res)=>{
    AnbarModel.insert(req.query)
    res.end('anbar is added')
})

route.post('/insertmehsul' , authmiddleware ,(req,res)=>{
    MehsulModel.insert(req.query)
    res.end('mehsul is added')
})

module.exports = route