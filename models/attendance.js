const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Student = require("./student");
const Class = require("./class");

const AttendanceRecord = sequelize.define("AttendanceRecord", {
  date: DataTypes.DATEONLY,
});


Student.belongsToMany(Class, { through: AttendanceRecord });
Class.belongsToMany(Student, { through: AttendanceRecord });

AttendanceRecord.belongsTo(Student);
AttendanceRecord.belongsTo(Class);

module.exports = AttendanceRecord;
