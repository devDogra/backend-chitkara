const http = require('http'); 

const app = http.createServer((req, res) => {
    console.log("Request recieved"); 
    res.end("This is a response"); 
})

app.listen(3000);