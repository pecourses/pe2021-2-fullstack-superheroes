'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      real_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origin_description: {
        type: Sequelize.STRING,
      },
      catch_phrase: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      is_good: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  },
};
