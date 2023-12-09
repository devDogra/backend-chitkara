const mongoose = require('mongoose'); 
const Student = require("../models/Student.js")
mongoose.connect("mongodb://127.0.0.1:27017/g25")

async function main() {
    const vishesh = new Student({
        name: "Vishesh",
        rollno: 1874
    });
    const saksham = new Student({
        name: "Saksham",
        rollno: 1236
    });
    const sanjoli = new Student({
        name: "Sanjoli",
        rollno: 1262
    });
    await Student.deleteMany()
    await vishesh.save();
    await saksham.save();
    await sanjoli.save();
}
main();