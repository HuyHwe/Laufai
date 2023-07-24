'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({types}) {
      songs.belongsTo(types, {foreignKey:"type_id"});
    }
  }
  songs.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artist: {
      type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'songs',
  });
  return songs;
};