const express = require('express');
const app = express();
app.use(express.json())
const data = require('./records.json');
const port = 3001;
const fs = require('fs');

//API ENDPOINTS
app.get("/api", async (req, res, next) => {
    res.json(data);
});

//Add a record
app.post("/api/add", async (req, res, next) => {
    const add = data.push(req.body);
    fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
        if (!err) res.send("success");
        if (err) throw err;
    });
});

//Edit a record
app.get("/api/edit", async (req, res, next) => {
    
});

//Delete a record
app.get("/api/delete", async (req, res, next) => {
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//const http = require('http');
//const cors = require('cors');
//const server = http.createServer(app);
//require("dotenv").config();