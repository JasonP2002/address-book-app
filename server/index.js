const express = require('express');
const app = express();
const data = require('./records.json');
const port = 3001;

console.log("DB: ", data);

app.get("/api", async (req, res, next) => {
    res.json(data);
});

app.get("/add", async (req, res, next) => {
    const add = data.push({"first_name": "Test", "last_name": "Name", "phone": "01792327382", "email": "testemail@gmail.com"});
    fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err;
        console.log("done");
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//const http = require('http');
//const cors = require('cors');
//const server = http.createServer(app);
//const fs = require('fs');
//require("dotenv").config();