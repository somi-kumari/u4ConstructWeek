const express = require("express")
const Lighting=require("../models/lighting.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const lighting=await Lighting.create(req.body)
        return res.json({ status: 'ok', data:lighting})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const lighting=await Lighting.find().lean().exec()
      
        return res.send(lighting)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
