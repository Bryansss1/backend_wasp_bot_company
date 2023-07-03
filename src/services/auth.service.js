const models=require("../modules")

class AuthServices{

static async getUsers(){
    const result=await models.users.findAll()
    return result
}

}


module.exports=AuthServices