'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admins', {
      id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
     },
     name_company:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
     },
     email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
         isEmail:true,
        }
     },
     password:{
        type:Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('admins');
  }
};