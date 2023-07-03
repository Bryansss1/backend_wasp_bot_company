'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.UUIDV4,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
      },
      full_name:{
        type:Sequelize.STRING,
        allowNull:true
     },
     whatsapp_number:{
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
    await queryInterface.dropTable('users');
  }
};