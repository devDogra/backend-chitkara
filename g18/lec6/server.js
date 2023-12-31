const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User.js');  
const bcrypt = require('bcrypt'); 
const cookieParser = require('cookie-parser');
const session = require('express-session'); 

const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/AuthG18')

app.use(express.json());
app.use(express.urlencoded()); 
app.use(cookieParser());

app.use(session({
    secret: 'this is my secret',
    cookie: {
        maxAge: 1000*15// 7days
    }
}))

app.post('/register', async (req, res) => {
    const user = req.body; 
    if (!user.password || !user.username) {
        res.send("Username and password are required"); 
        return;     
    }
    if (user.password.length < 4) {
        res.send("Password length must be >= 4");
        return; 
    }

    const newUser = new User(user);
    const saltRounds = 10;


    const hashedPwd = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPwd; 

    try {
        await newUser.save();
        res.send("Registration successful"); 
    } catch(err) {
        res.send("Couldn't register account");
    }

})

// Cookies
app.get('/shop', (req, res) => {
    const discount = "Item | Rs. 100 | 20% off";
    const noDiscount = "Item | Rs. 100";

    const visited = req.cookies.visited; 

    if (visited) {
        res.send(noDiscount);
    } else {
        res.cookie('visited', true);
        res.send(discount);
    }
})

app.get('/logout', (req, res) => {
    req.session.loggedIn = false;
    res.send("Logged out succesfully");
})

app.get('/protected', (req, res) => {
    const loggedIn = req.session.loggedIn    
    if (loggedIn) {
        res.send("Secret information");
    } else {
        res.redirect("/login");
    }
})


app.post('/login', async (req, res) => {
    const loginData = req.body; 
    const account = (await User.find().where('username').equals(loginData.username))[0];

    if (!account) {
        res.send("No such account"); 
        return;
    }
    // Account found
    const match = await bcrypt.compare(loginData.password, account.password)
    if (!match) {
        res.send("Incorrect password"); 
        return; 
    }

    req.session.user = account;
    req.session.loggedIn = true; 
    // session id =====cookie=====> user
    res.send("Login succesful"); 

})

app.get('/accounts', (req, res) => {
    // /accounts?n=10&sort=true
    const n = req.query.n
    const sort = req.query.sort; 
    let usernames = users.map(user => user.username);
    if (n) {
        usernames = usernames.slice(0, n);
    }
    if (sort) {
        usernames.sort(); 
    }
    res.send(usernames); 
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})



app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})


