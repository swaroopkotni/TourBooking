const express=require('express')
// const { models } = require('mongoose')
const connect=require('../utilities/connection.js')
const router=express.Router()
router.post('/login',async(req,res)=>{
    console.log(req.body)
    let model=await connect.getCollection()
    // let data=await model.create(req.body)
    console.log(model)

})
module.exports=router