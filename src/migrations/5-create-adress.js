'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
      id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
     },
     user_id:{
        type:Sequelize.UUID,
        allowNull:true,
        references:{
            model:"users",
            key:"id"
        }
     },
     admin_id:{
      type:Sequelize.UUID,
      allowNull:true,
      references:{
          model:"admins",
          key:"id"
      }
   },
     address:{
        type:Sequelize.STRING,
        allowNull:false
     },
     address_name:{
        type:Sequelize.STRING,
        allowNull:true
     },
     description:{
        type:Sequelize.STRING,
        allowNull:true
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};