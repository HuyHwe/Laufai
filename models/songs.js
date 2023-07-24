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
    static associate(models) {
      // define association here
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
    type: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'songs',
  });
  return songs;
};