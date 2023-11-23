const express = require('express'); 
const fs = require('fs'); 
const todos = require('./todos.json');
const app = express(); 

app.set('view engine', 'hbs'); 
app.set('views', './views'); 

app.use(express.json());

app.get('/todos', (req, res) => {
    res.send(todos);
})
app.post('/todos', (req, res) => {
    const newTodoData = req.body; 
    todos.push(newTodoData);
    fs.writeFileSync('./todos.json', JSON.stringify(todos))
    res.send("Todo added successfully"); 
})


app.get('/', (req, res) => {
    res.render('index', {
        todos
    })
})

app.listen(3000, () => console.log("http://localhost:3000"))