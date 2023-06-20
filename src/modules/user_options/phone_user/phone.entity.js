import { dbSource } from "../../../config/appDatasource.js";
import { DataTypes } from "sequelize";
import { Admins } from "../../auth/user.entity.js";

export const PhoneNumber=dbSource.define("phones_admin",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     phone:{
        type:DataTypes.STRING,
        allowNull:true
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