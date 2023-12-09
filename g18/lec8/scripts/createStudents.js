const mongoose = require('mongoose'); 
const DB_URL = "mongodb://127.0.0.1:27017/g18"

mongoose.connect(DB_URL);

const Student = require("../models/Student.js")
async function run() {
    const vipul = new Student({
        name: "Vipul",
        rollno: 1872
    })
    const khushi = new Student({
        name: "Khushi",
        rollno: 770
    })
    const kulwinder = new Student({
        name: "Kulwinder",
        rollno: 805
    })
    await vipul.save();
    await khushi.save();
    await kulwinder.save();
}
run();
