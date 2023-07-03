'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey:true
     },
     comment:{
        type:Sequelize.STRING,
        allowNull:true
     },
     total_price:{
        type:Sequelize.STRING,
        allowNull:true
     },
     date:{
        type:Sequelize.STRING,
        allowNull:true
     },
     is_check:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
     },
     user_id:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
            model:"users",
            key:"id"
        }
     },
     products_id:{
        type:Sequelize.ARRAY(Sequelize.UUID),
        allowNull:false,
     },
     admin_id:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
            model:"admins",
            key:"id"
        }
     },
     address_id:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
            model:"address",
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
    await queryInterface.dropTable('orders');
  }
};