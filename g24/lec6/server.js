const express = require('express'); 
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User.js');

mongoose.connect("mongodb://127.0.0.1:27017/AuthG24")

const app = express(); 

app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded()); 

app.set('view engine', 'hbs'); 
app.set('views', './views')

app.get('/shop', (req, res) => {
    const visited = req.cookies.visited; 

    if (visited) {
        res.send("Item | Rs. 100")
    } else {
        res.cookie('visited', true);
        res.send("Item | Rs. 80 (20% discount");
    }
   
})

app.post('/register', async (req, res) => {
    const user = req.body; 
    if (!user.username || !user.password) {
        res.send("Username and password are required"); 
        return; 
    }
    if (user.password.length < 4) {
        res.send("Password length must be >= 4");
        return; 
    }
    // users.push(user); 
    const newUser = new User(user);
    await newUser.save();
    res.send("Registration succesful"); 
})
app.post('/login', async (req, res) => {
    const user = req.body; 
    if (!user.username || !user.password) {
        res.send("Username and password are required"); 
        return; 
    }

    const account =  await User.findOne({
        username: user.username
    })

    if (account.password == user.password) {
        res.send("Login succesful");
    } else {
        res.send("Incorrect password");
    }
    // const account = await User.findOne().where('username').equals(user.username);
    // res.send("Invalid login"); 
})
app.get('/register', (req, res) => {
    res.render('register'); 
})
app.get('/login', (req, res) => {
    res.render('login'); 
})

app.get('/accounts', (req, res) => {
    // /accounts?n=10&sort=true
    const n = req.query.n;
    const sort = req.query.sort; 
    // Send a web page which shows all registered accounts
    let usernames = users.map(user => user.username); 
    if (n) {
        usernames = usernames.slice(0, n); 
    }
    if (sort) {
        usernames.sort();
    }

    // res.send(usernames); 
    res.render('accounts', {
        usernames
    })
})

app.listen(3000, () => 
console.log("http://localhost:3000")
)
