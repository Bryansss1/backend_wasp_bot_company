'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
       Phones.belongsTo(models.Admins,{as:"admins",foreignKey:"admin_id"})
       */
    }
  }
  Phones.init({
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
   },
   phone:{
      type:DataTypes.STRING,
      allowNull:true
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
    modelName: 'phones_admin',
  });
  return Phones;
};