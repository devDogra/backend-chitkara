const http = require('http'); 

const users = [
    { name: "Dev", age: 22},
    { name: "Hitesh", age: 23}
]
const products = [
    { name: "Eraser", price: 10 }, 
    { name: "Pencil", price: 5 }
]

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method);
    if (req.url == '/users') {
        res.end(JSON.stringify(users));
    } else if (req.url == '/products') {
        res.end(JSON.stringify(products));
    } else {
        res.setHeader("Content-Type", "text/plain");
        res.end("Error 404"); 
    }
})

server.listen(3000, () => console.log("Server listenting at http://localhost:3000"))
