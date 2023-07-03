const express=require("express")
const AuthRouter=require("./auth.routes")

function routerModels(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/auth/',AuthRouter)
  }
  
module.exports = routerModels