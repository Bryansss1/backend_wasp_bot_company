import { Users,Admins} from "./auth/user.entity.js"
import { Business } from "./business/business.entity.js"
import { Products } from "./products/products.entity.js"
import { Address } from "./user_options/adress_user/adress.entity.js"
import { Orders } from "./user_options/order_user/order.entity.js"
import { PhoneNumber } from "./user_options/phone_user/phone.entity.js"


export const initModel=()=>{

//ADDRESS WITH USERS AND ADMINS RELATIONS START HERE
Address.belongsTo(Users,{as:"users",foreignKey:"user_id"})
Users.hasMany(Address,{as:"address",foreignKey:"user_id"})


Address.belongsTo(Admins,{as:"admins",foreignKey:"admin_id"})
Admins.hasMany(Address,{as:"address",foreignKey:"admin_id"})
//ADDRESS WITH USERS AND ADMINS RELATIONS CLOSE HERE

//PRODUCTS WITH ADMINS RELATIONS START HERE
Products.belongsTo(Admins,{as:"admins",foreignKey:"admin_id"})
Admins.hasMany(Products,{as:"products",foreignKey:"admin_id"})
//PRODUCTS WITH ADMINS RELATIONS CLOSE HERE

//PHONES NUMBER WITH ADMINS RELATIONS START HERE
PhoneNumber.belongsTo(Admins,{as:"admins",foreignKey:"admin_id"})
Admins.hasMany(PhoneNumber,{as:"phones_admin",foreignKey:"admin_id"})
//PHONES NUMBER WITH ADMINS RELATIONS CLOSE HERE

//ORDER RELATIONS START HERE
Orders.belongsTo(Users,{as:"users",foreignKey:"user_id"})
Users.hasMany(Orders,{as:"orders",foreignKey:"user_id"})

/*
Orders.belongsTo(Products,{as:"products",foreignKey:"products_id"})
Products.hasMany(Orders,{as:"orders",foreignKey:"products_id"})
*/
Orders.belongsTo(Admins,{as:"admins",foreignKey:"admin_id"})
Admins.hasMany(Orders,{as:"orders",foreignKey:"admin_id"})

Orders.belongsTo(Address,{as:"address",foreignKey:"address_id"})
Address.hasMany(Orders,{as:"orders",foreignKey:"address_id"})

//ORDER RELATIONS START HERE

//BUSINESS RELATIONS START HERE
Business.belongsTo(Orders,{as:"orders",foreignKey:"order_id"})
Orders.hasOne(Business,{as:"business",foreignKey:"order_id"})
//BUSINESS RELATIONS CLOSE HERE
}