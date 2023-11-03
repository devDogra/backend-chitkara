const http = require('http'); 
const users = [
    { name: "Dev", age: 22 }, 
    { name: "Nishant", age: 20 }, 
]
const products = [
    { name: "Eraser", price: 100 },
    { name: "Pen", price: 200 }
]
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method); 

    if (req.url == '/products') {
        res.end(JSON.stringify(products));
    } else if (req.url == '/users') {
        res.end(JSON.stringify(users));
    }  else {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Error</h1> <p>404</p>"); 
    }
})
server.listen(3000, () => console.log("Server listening at http://localhost:3000"))

