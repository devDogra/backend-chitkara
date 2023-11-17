const express = require('express'); 
const app = express(); 
const todos = require("./todos.json");
const fs = require('fs'); 

app.use(express.json());

app.get('/todos', (req, res) => {
    res.send(todos); 
})
app.post('/todos', (req, res) => {
    const newTodoData = req.body; 
    todos.push(newTodoData); 
    fs.writeFileSync(__dirname + "/todos.json", 
        JSON.stringify(todos)
    )
    res.send("Todo added"); 
})

app.get('/', (req, res) => {
    console.log(__dirname); 
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, () => console.log(
    "http://localhost:3000"
))