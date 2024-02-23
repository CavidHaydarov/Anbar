const express = require('express')
const { port } = require('./utils')
const AnbarModel = require('./models/anbarModel')
const UserModel = require('./models/UserModel')
const authroute = require('./router/authroute')
const route = require('./router/route')




const app = express()


app.use('/' , authroute)
app.use('/create' , route)



app.get('/anbarlar',(req,res)=>{
    AnbarModel.get()
    res.end()
})



app.delete('/delete' , (req,res)=>{
    UserModel.delete(req.query.id)
    res.end()
})


app.listen(port , ()=>{
    console.log(`server is ${port} run`);
})