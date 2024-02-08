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
router.get("/view",async(req,res)=>{
    let data=await patientmodel.find()
    res.send(data)
})

router.post("/search",async(req,res)=>{
    let input =req.body
    let data=await patientmodel.find(input)
    res.json(data)
}
)

module.exports=router