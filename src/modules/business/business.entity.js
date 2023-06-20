import { dbSource } from "../../config/appDatasource.js";
import { DataTypes } from "sequelize";
import { Orders } from "../user_options/order_user/order.entity.js";

export const Business=dbSource.define("business",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     user_name:{
        type:DataTypes.STRING,
        allowNull:true
     },
     company_name:{
        type:DataTypes.STRING,
        allowNull:true
     },
     description:{
        type:DataTypes.STRING,
        allowNull:false
     },
     is_pay:{
        type:DataTypes.STRING,
        allowNull:false
     },
     order_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Orders,
            key:"id"
        }
     }
},{
    createdAt:true,
    updatedAt:true
})