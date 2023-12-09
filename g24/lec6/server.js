const express = require('express'); 
const app = express(); 

const users = [];
app.use(express.json()); 
app.use(express.urlencoded()); 

app.set('view engine', 'hbs'); 
app.set('views', './views')

app.post('/register', (req, res) => {
    const user = req.body; 
    if (!user.username || !user.password) {
        res.send("Username and password are required"); 
        return; 
    }
    if (user.password.length < 4) {
        res.send("Password length must be >= 4");
        return; 
    }
    users.push(user); 
    res.send("Registration succesful"); 
})
app.post('/login', (req, res) => {
    const user = req.body; 
    if (!user.username || !user.password) {
        res.send("Username and password are required"); 
        return; 
    }
    [
        { username: "Dev", password: "Hello" }, 
        { username: "Dev2", password: "Hello2" }, 
        { username: "Dev3", password: "Hello3" }, 
    ]
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == user.username) {
            if (users[i].password == user.password){
                res.send("Login succesful"); 
                return; 
            }
        }
    }
    res.send("Invalid login"); 
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
