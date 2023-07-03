'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Users.hasMany(models.Address,{as:"address",foreignKey:"user_id"})
      Users.hasMany(models.Orders,{as:"orders",foreignKey:"user_id"})
      */
    }
  }
  Users.init({
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
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'users',
  });
  return Users;
};