require('dotenv').config();
const express=require("express")
const cors=require("cors")
const {dbSource}=require("./config/appDatasource.js");
const routerModels = require('./routes/index.js');


const app=express()
app.use(cors())
app.use(express.json())


const PORT=process.env.PORT||5500

dbSource.authenticate()
.then(()=>console.log("Database authenticade"))
.catch((error)=>console.log(error))

dbSource.sync({force:true})
.then(()=>console.log("server syncroned"))

app.get("/",(req,res)=>{
res.json({message:"welcome to the server"})
})

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})

routerModels(app)