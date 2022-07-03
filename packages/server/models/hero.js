'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate (models) {}
  }
  Hero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originDescription: DataTypes.STRING,
      catchPhrase: DataTypes.STRING,
      image: DataTypes.STRING,
      isGood: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Hero',
      tableName: 'heroes',
      underscored: true,
    }
  );
  return Hero;
};
