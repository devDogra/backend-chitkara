const express = require('express'); 
const app = express(); 

const logger = (req, res, next) => {
    const now = (new Date()).toLocaleTimeString();
    console.log(
        now,
        " => ", 
        req.method, 
        req.url, 
    )
    next(); 
}

const verifyKey = (req, res, next) => {
    const key = req.query.key;
    if (key == 2110990913) {
        next();
    } else {
        res.send("Invalid key")
    }
}

// app.get('/hi', (req, res) => res.send("HELLO")); 

app.use(logger); 
// app.use(verifyKey); 

app.get('/', (req, res) => {
    res.send("Welcome");
})

// Not everyone can see marks
app.get('/marks', verifyKey, (req, res) => {
    const data = [37, 40, 30];
    res.send(data); 
})

const PORT = 3000; 
app.listen(PORT, () => {
    console.log("http://localhost:3000"); 
})