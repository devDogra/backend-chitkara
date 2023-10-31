const fs = require('fs')

fs.readFile('./hello2.txt', 'utf8', (err, data) => {
    console.log("DATA: ");
    console.log(data); 
    console.log("ERROR: "); 
    console.log(err);
})

const data = fs.readFileSync('./hello.txt', 'utf8');

fs.promises.readFile("./hello.txt", 'ut8')
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
