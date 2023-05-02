const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Piece extends Model {}

Piece.init(
  {
    name: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Piece;