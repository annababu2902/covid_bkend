const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controllers/patientrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anna29:annababu23@cluster0.hfzaiis.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/patient",patientrouter)

app.listen(3001)