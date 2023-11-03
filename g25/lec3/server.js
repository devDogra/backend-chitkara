const http = require('http'); 
const users = [
    { name: "Dev", age: 22 }, 
    { name: "Rikit", age: 23}
]
const products = [
    { name: "Eraser", price: 20 }, 
    { name: "Pencil", price: 5 }, 
]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    if (req.url == '/users') {
        res.end(JSON.stringify(users));
    } else if (req.url == '/products') {
        res.end(JSON.stringify(products)); 
    } else {
        res.end("Error 404"); 
    }
})

server.listen(3000, () => console.log("Server listening at http://localhost:3000"))
