const mongoose = require('mongoose');
const Student = require('./models/Student.js')

mongoose.connect("mongodb://127.0.0.1:27017/g24")



async function main() {
    // const allStudents = await Student.find();
    // console.log("------ All Students ------");
    // console.log(allStudents);
    // console.log("------ Find by ID ------");
    // const found = await Student.findById("6572ff2325c7f99b72cbfcd3");
    // console.log(found);

    const students = await Student.where("rollno").gt(1100);
    console.log(students);

    const rivanshu = await Student.where("name").equals("Rivanshu");
    console.log(rivanshu);
    rivanshu[0].rollno = 1199;
    await rivanshu[0].save();


}
main();


