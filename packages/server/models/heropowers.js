'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroPowers extends Model {
    static associate (models) {}
  }
  HeroPowers.init(
    {
      heroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hero',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      powerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Power',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      tableName: 'hero_powers',
      modelName: 'HeroPowers',
      underscored: true,
    }
  );
  return HeroPowers;
};
