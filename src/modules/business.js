'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       //Business.belongsTo(models.Orders,{as:"orders",foreignKey:"order_id"})
    }
  }
  Business.init({
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
   time:{
    type:DataTypes.STRING,
    allowNull:true
    },
   description:{
      type:DataTypes.STRING,
      allowNull:true
   },
   is_pay:{
      type:DataTypes.STRING,
      allowNull:false
   },
   order_id:{
      type:DataTypes.UUID,
      allowNull:false,
      references:{
          model:"orders",
          key:"id"
      }
   }
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'business',
  });
  return Business;
};