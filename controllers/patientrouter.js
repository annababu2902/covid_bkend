const express=require("express")
const patientrouter=require("../models/patientmodel")
const patientmodel = require("../models/patientmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
   let data=req.body
   let cpatient=new patientmodel(data)
   let result=await cpatient.save()

   res.json({
    status:"success" }
   ) 

})

module.exports=router