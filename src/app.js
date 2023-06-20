import "dotenv/config"
import express  from "express"
import cors from "cors"
import {dbSource} from "./config/appDatasource.js"
import { initModel } from "./modules/init.models.js"

const app=express()
app.use(cors())
app.use(express.json())


const PORT=process.env.PORT||5500

dbSource.authenticate()
.then(()=>console.log("Database authenticade"))
.catch((error)=>console.log(error))

dbSource.sync({force:true})
.then(()=>console.log("server syncroned"))

initModel()

app.get("/",(req,res)=>{
res.json({message:"welcome to the server"})
})

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})