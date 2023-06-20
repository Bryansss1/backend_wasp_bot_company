import { dbSource } from "../../config/appDatasource.js";
import { DataTypes } from "sequelize";
import { Admins } from "../auth/user.entity.js";

export const Products=dbSource.define("products",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     name:{
        type:DataTypes.STRING,
        allowNull:true
     },
     quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
     },
     img:{
        type:DataTypes.STRING,
        allowNull:false
     },
     description:{
        type:DataTypes.STRING,
        allowNull:false
     },
     price:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
     },
     admin_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Admins,
            key:"id"
        }
     }
},{
    createdAt:true,
    updatedAt:true
})