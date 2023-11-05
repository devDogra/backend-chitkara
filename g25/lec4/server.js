const express = require('express'); 
const app = express(); 

const users = [
    { name: "Dev", age: 22 }, 
    { name: "Rikit", age: 23}
]
const products = [
    { name: "Eraser", price: 20 }, 
    { name: "Pencil", price: 5 }, 
]

app.get('/users', (req, res) => {
    res.send(users);
})
app.get('/products', (req, res) => {
    res.send(products); 
})
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/homepage.html")
})
app.post('/users', (req, res) => {
    // ...
    res.send("New user created"); 
})

app.listen(3000, () => console.log("http://localhost:3000"))