import { dbSource } from "../../../config/appDatasource.js";
import { DataTypes } from "sequelize";
import { Admins, Users } from "../../auth/user.entity.js";

export const Address=dbSource.define("address",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     user_id:{
        type:DataTypes.UUID,
        allowNull:true,
        references:{
            model:Users,
            key:"id"
        }
     },
     admin_id:{
      type:DataTypes.UUID,
      allowNull:true,
      references:{
          model:Admins,
          key:"id"
      }
   },
     address:{
        type:DataTypes.STRING,
        allowNull:false
     },
     address_name:{
        type:DataTypes.STRING,
        allowNull:true
     },
     description:{
        type:DataTypes.STRING,
        allowNull:true
     },
},{
    createdAt:true,
    updatedAt:true
})