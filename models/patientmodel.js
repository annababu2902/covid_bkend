const mongoose=require("mongoose")
const patientrouter=mongoose.Schema(
    {
   pname:String,
    pphoneno:String,
    paddress:String,
    psymptoms:String,
    pstatus:String
}
)
module.exports=mongoose.model("covidpatient",patientrouter)