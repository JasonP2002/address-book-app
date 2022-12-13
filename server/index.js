const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const data = require('./records.json');
const server = http.createServer(app);
const fs = require('fs');

const port = 3001;
require("dotenv").config();

console.log("DB: ", data);

app.get("/add", async (req, res, next) => {
    const add = data.push({"first_name": "Test", "last_name": "Name", "phone": "01792327382", "email": "testemail@gmail.com"});
    fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err;
        console.log("done");
    });
});

server.listen(port, () => console.log("Listening on port 3001"));