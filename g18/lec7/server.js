const express = require('express'); 
const app = express();

const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(time, req.method, req.url); 
    next();
}

const verifyKey = (req, res, next) => {
    const key = req.query.key;
    if (key == 2001) {
        next();
    } else {
        res.send("Invalid key"); 
    }
}
app.get('/hi', (req, res) => res.send("Hello")); 
// app.use(verifyKey); 
app.use(logger);

app.get('/marks', verifyKey, (req, res) => {
    const marks = [40, 37, 40];
    res.send(marks); 
})

app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})