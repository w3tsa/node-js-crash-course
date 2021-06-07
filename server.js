// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1> <p>lorem ipsum</p>')
// })

// const PORT = 5000 || process.env.PORT;

// server.listen(PORT, () => {
//     console.log(`listening on ${PORT}`)
// })

const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json('hello world')
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})


