const express = require('express'); 
const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded()); 
const users = [];
app.post('/register', (req, res) => {
    const user = req.body; 
    if (!user.password || !user.username) {
        res.send("Username and password are required"); 
    }
    if (user.password.length < 4) {
        res.send("Password length must be >= 4"); 
    }
    users.push(user); 
    res.send("Registration successful"); 
})
app.post('/login', (req, res) => {
    const loginData = req.body; 
    const userTryingToLogin = users.find(
        u => u.username == loginData.username
    );
    if (!userTryingToLogin) {
        res.send("No such account"); 
        return; 
    }
    if (userTryingToLogin.password != loginData.password){
        res.send("Incorrect password"); 
        return; 
    }
    res.send("Login succesful"); 
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/accounts', (req, res) => {
    const n = req.query.n
    const sort = req.query.sort; 
    console.log(n, sort); 
    let usernames = users.map(user => user.username); 
    if (n) {
        usernames = usernames.slice(0, n);
    }
    if (sort) {
        usernames.sort();
    }
    res.send(usernames); 
})

 
app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})

