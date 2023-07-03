'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('business', {
      id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
     },
     user_name:{
        type:Sequelize.STRING,
        allowNull:true
     },
     company_name:{
        type:Sequelize.STRING,
        allowNull:true
     },
     time:{
      type:Sequelize.STRING,
      allowNull:true
      },
     description:{
        type:Sequelize.STRING,
        allowNull:true
     },
     is_pay:{
        type:Sequelize.STRING,
        allowNull:false
     },
     order_id:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
            model:"orders",
            key:"id"
        }
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
    await queryInterface.dropTable('business');
  }
};