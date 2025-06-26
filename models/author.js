const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Author = sequelize.define("Author", {
  name: DataTypes.STRING,
  birthYear: DataTypes.INTEGER,
});

module.exports = Author;
