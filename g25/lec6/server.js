const express = require('express'); 
const mongoose = require('mongoose'); 
const User = require('./models/User.js');
const bcrypt = require('bcrypt'); 

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded()); 
// const users = [];

mongoose.connect('mongodb://127.0.0.1:27017/AuthG25');

// plaintext pwd                  hashed pwd/encrypted pwd
// rohit ------encrypt-----> fk2398749274982r34h4ri34

// rohit ----> abcdefg 
// abcdefg ----> tt546y
// tt546y -----> uyuyuy



app.post('/register', async (req, res) => {
    const user = req.body; 
    if (!user.password || !user.username) {
        res.send("Username and password are required"); 
    }
    if (user.password.length < 4) {
        res.send("Password length must be >= 4"); 
    }
    // users.push(user); 
    const newUser = new User(user);
    const saltRounds = 10;
    const hashedPwd = await bcrypt.hash(newUser.password, saltRounds)
    newUser.password = hashedPwd; 
    try {
        await newUser.save();
        res.send("Registration successful"); 
    } catch(err) {
        res.status(400).send("Registration failed");
    }
})

app.post('/login', async (req, res) => {
    const loginData = req.body; 

    const userTryingToLogin = (await User.find().where('username').equals(loginData.username))[0];

    // nandini
    // dwjkejghkwejbkejwhrke3jhrtkrejh

    if (!userTryingToLogin) {
        res.send("No such account"); 
        return; 
    }

    const matches = await bcrypt.compare(loginData.password, userTryingToLogin.password);

    if (!matches){
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

