'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      /*
       Address.belongsTo(models.Users,{as:"users",foreignKey:"user_id"})
       Address.belongsTo(models.Admins,{as:"admins",foreignKey:"admin_id"})
       Address.hasMany(models.Orders,{as:"orders",foreignKey:"address_id"})
       */
    }
  }
  Address.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
   },
   user_id:{
      type:DataTypes.UUID,
      allowNull:true,
      references:{
          model:"users",
          key:"id"
      }
   },
   admin_id:{
    type:DataTypes.UUID,
    allowNull:true,
    references:{
        model:"admins",
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
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'address',
  });
  return Address;
};