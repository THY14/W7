const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Student = sequelize.define("Student", {
  name: DataTypes.STRING,
});

module.exports = Student;
