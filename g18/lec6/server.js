const express = require('express'); 
const app = express(); 

app.use(express.json());
app.use(express.urlencoded()); 

const users = [];

app.post('/register', (req, res) => {
    const user = req.body; 
    if (!user.password || !user.username) {
        res.send("Username and password are required"); 
        return;     
    }

    if (user.password.length < 4) {
        res.send("Password length must be >= 4");
        return; 
    }
    users.push(user); 
    res.send("Registration successful"); 

})

app.post('/login', (req, res) => {
    const loginData = req.body; 
    const account = users.find(
        u => u.username == loginData.username
    );
    if (!account) {
        res.send("No such account"); 
        return;
    }
    // Account found
    if (account.password != loginData.password) {
        res.send("Incorrect password"); 
        return; 
    }
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


