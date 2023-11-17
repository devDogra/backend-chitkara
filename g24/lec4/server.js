const express = require('express'); 
const app = express();

const users = [
    { name: "Dev", age: 22},
    { name: "Hitesh", age: 23}
]
const products = [
    { name: "Eraser", price: 10 }, 
    { name: "Pencil", price: 5 }
]

app.get('/users', (req, res) => {
    res.send((users));
})
app.get('/products', (req, res) => {
    res.send((products));
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
})
app.post('/', (req, res) => {
    res.send("HELLO");
})

app.listen(3000, () => console.log(
    "http://localhost:3000"
))