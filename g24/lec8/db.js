const Student = require("./models/Student");

const raushan = new Student({
    name: "Raushan",
    rollno: 1140
})
const rivanshu = new Student({
    name: "Rivanshu",
    rollno: 1184
})
const prachi = new Student({
    name: "Prachi",
    rollno: 1024
})
const priya = new Student({
    name: "Priya",
    rollno: 1071
})

async function main() {
    await Student.deleteMany();
    await raushan.save()
    await rivanshu.save();
    await priya.save();
    await prachi.save();
}
