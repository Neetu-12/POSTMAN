// const fs = require("fs")
const bodyParser = require('body-parser'); // middleware
const express = require("express")
const app = express(); // Create an ExpressJS app

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.listen(8000, () => {
    console.log("listen 8000 port");
})

// console.log(app);
// fs.writeFileSync("Neetu.txt","Hello Neetu Sah")
// a=fs.readFileSync("Neetu.txt")
// b=a.toString()
// console.log(b);