const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    name: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Player;