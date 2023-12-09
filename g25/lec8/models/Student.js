const mongoose = require('mongoose'); 

// Schemas / Blueprints
const StudentSchema = mongoose.Schema({
    name: String,
    rollno: Number,
})

// Model / Factory
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student; 