const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    rollno: Number
})
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student; 