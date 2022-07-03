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
      realName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      originDescription: {
        type: Sequelize.STRING,
      },
      catchPhrase: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      isGood: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('heroes');
  },
};
