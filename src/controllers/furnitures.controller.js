const express = require("express")
const Furniture=require("../models/furnitures.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const furniture=await Furniture.create(req.body)
        return res.json({ status: 'ok', data: furniture})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const furniture=await Furniture.find().lean().exec()
      
        return res.send(furniture)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
