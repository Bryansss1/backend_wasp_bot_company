'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Orders.belongsTo(models.Users,{as:"users",foreignKey:"user_id"})
      Orders.belongsTo(models.Admins,{as:"admins",foreignKey:"admin_id"})
      Orders.belongsTo(models.Address,{as:"address",foreignKey:"address_id"})
      Orders.hasOne(models.Business,{as:"business",foreignKey:"order_id"})
      */
    }
  }
  Orders.init({
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
          model:"users",
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
          model:"admins",
          key:"id"
      }
   },
   address_id:{
      type:DataTypes.UUID,
      allowNull:false,
      references:{
          model:"address",
          key:"id"
      }
   }
  }, {
    createdAt:true,
    updatedAt:true,
    sequelize,
    modelName: 'orders',
  });
  return Orders;
};