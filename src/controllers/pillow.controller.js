const express = require("express")
const Pillow=require("../models/pillow.model")

const router = express.Router()

router.post("",async(req,res)=>{
    try{
     
        const pillow=await Pillow.create(req.body)
        return res.json({ status: 'ok', data:pillow})
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
     
        const pillow=await Pillow.find().lean().exec()
      
        return res.send(pillow)
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports=router
