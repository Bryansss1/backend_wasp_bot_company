import { dbSource } from "../../config/appDatasource.js";
import { DataTypes } from "sequelize";

export const Users=dbSource.define("users",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     full_name:{
        type:DataTypes.STRING,
        allowNull:true
     },
     whatsapp_number:{
        type:DataTypes.STRING,
        allowNull:true
     }
},{
    createdAt:true,
    updatedAt:true
})

export const Admins=dbSource.define("admins",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     name_company:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
     },
     email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
         isEmail:true,
         }
     },
     password:{
        type:DataTypes.STRING,
        allowNull:false
     }
},{
    createdAt:true,
    updatedAt:true
})
