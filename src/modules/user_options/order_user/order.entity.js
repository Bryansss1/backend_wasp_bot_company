import { dbSource } from "../../../config/appDatasource.js";
import { DataTypes } from "sequelize";
import { Products } from "../../products/products.entity.js";
import { Admins, Users } from "../../auth/user.entity.js";
import { Address } from "../adress_user/adress.entity.js";

export const Orders=dbSource.define("orders",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
     },
     comment:{
        type:DataTypes.STRING,
        allowNull:true
     },
     total_price:{
        type:DataTypes.STRING,
        allowNull:true
     },
     time:{
        type:DataTypes.STRING,
        allowNull:true
     },
     date:{
        type:DataTypes.STRING,
        allowNull:true
     },
     is_check:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull:false
     },
     user_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Users,
            key:"id"
        }
     },
     products_id:{
        type:DataTypes.ARRAY(DataTypes.UUID),
        allowNull:false,
     },
     admin_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Admins,
            key:"id"
        }
     },
     address_id:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Address,
            key:"id"
        }
     }
},{
    createdAt:true,
    updatedAt:true
})