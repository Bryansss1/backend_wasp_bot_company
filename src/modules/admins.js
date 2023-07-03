'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Admins.hasMany(models.Address,{as:"address",foreignKey:"admin_id"})
      //Admins.hasMany(models.Products,{as:"products",foreignKey:"admin_id"})
      //Admins.hasMany(models.Phones,{as:"phones_admin",foreignKey:"admin_id"})
      //Admins.hasMany(models.Orders,{as:"orders",foreignKey:"admin_id"})
    }
  }
  Admins.init({
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
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'admins',
  });
  return Admins;
};