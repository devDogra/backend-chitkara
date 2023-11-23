const express = require('express'); 
const app = express(); 
app.use(express.json()); 
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

app.get('/accounts', (req, res) => {
    const usernames = users.map(user => user.username); 
    res.send(usernames); 
})


app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})