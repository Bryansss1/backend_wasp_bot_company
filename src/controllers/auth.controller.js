const AuthServices = require("../services/auth.service")



const getUserss=async(req,res,next)=>{
    try {
    const result=await AuthServices.getUsers()
    return res.json(result)
    } catch (error) {
    next(error)
    }
}






module.exports={
    getUserss,
}