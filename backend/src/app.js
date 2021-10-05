const express=require('express')
const app=express()
const bp=require('body-parser')
const cors=require('cors')
const route=require('./routes/routing')
app.use(bp.json())
app.use(cors())
app.use('/',route)
app.listen(4000)
console.log("listening at port 4000...")


