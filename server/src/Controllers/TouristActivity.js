const { DataTypes } = require("sequelize");
const db = require("../database");

const TouristActivity = db.define(
  "TouristActivity",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tourist_activities",
  }
);

module.exports = TouristActivity;
