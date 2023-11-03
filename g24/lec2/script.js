const { add, mul } = require('./mymodule.js')
const uuid = require("uuid")

console.log(add(10, 20));
console.log(mul(10, 20));
console.log("HELLO!!!"); 
console.log(uuid.v4());