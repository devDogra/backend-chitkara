const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(time, req.method, req.url);
    next();
}
// /marks?key=2001
const verifyKey = (req, res, next) => {
    const key = req.query.key;
    if (key == 2001) {
        next();
    } else {
        res.send("Invalid key");
    }
}

app.get('/hi', (req, res) => res.send("Hello"));

// /marks?key=2001
app.use(logger);
// app.use(verifyKey);

app.get('/marks', verifyKey, (req, res) => {
    const marks = [10, 4, 5];
    res.send(marks);
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})




