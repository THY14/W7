const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Class = sequelize.define("Class", {
  title: DataTypes.STRING,
});

module.exports = Class;
