const mongoose = require('mongoose'); 

// Blueprint / Schema
const StudentSchema = mongoose.Schema({
    name: String,
    rollno: Number,
})
// Factory / Model
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student; 