const sequelize = require("../models");
const Student = require("../models/student");
const Class = require("../models/class");
const AttendanceRecord = require("../models/attendance");

async function run() {
  await sequelize.sync({ force: true }); 

  // Create student and class
  const student = await Student.create({ name: "Methy" });
  const class1 = await Class.create({ title: "Node.js" });

  const student1 = await Student.create({ name: "songleang" });
  const class2 = await Class.create({ title: "React.js" });


  console.log("Student ID:", student.id);
  console.log("Class ID:", class1.id);
  console.log("Student ID:", student1.id);
  console.log("Class ID:", class2.id);

  await AttendanceRecord.create({
    StudentId: student.id,   
    ClassId: class1.id,      
    date: "2025-06-17"
  })

  const record = await AttendanceRecord.findOne({
    where: { StudentId: student.id, date: "2025-06-17" }
  });
  console.log("Attendance Record:", record?.toJSON());


  const classRecords = await AttendanceRecord.findAll({
    where: { ClassId: class1.id },
    include: [Student]
  });
  console.log("Class Attendance:");
  classRecords.forEach(r => {
    console.log(` - ${r.Student.name} on ${r.date}`);
  });

  
  const summary = await AttendanceRecord.findAll({
    where: { StudentId: student.id },
    include: [Class]
  });
  console.log("Student Summary:");
  summary.forEach(r => {
    console.log(` - ${r.Class.title} on ${r.date}`);
  });
}

run();
