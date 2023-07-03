'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
       Products.belongsTo(models.Admins,{as:"admins",foreignKey:"admin_id"})
       */
    }
  }
  Products.init({
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
          model:"admins",
          key:"id"
      }
   }
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'products',
  });
  return Products;
};