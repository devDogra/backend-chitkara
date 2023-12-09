const mongoose = require('mongoose');
const Student = require("./models/Student.js")

const DB_URL = "mongodb://127.0.0.1:27017/g18"
mongoose.connect(DB_URL);



async function main() {

    // const allStudents = await Student.find()
    // console.log(allStudents);
}
main();
