const express = require('express');
const app = express();
app.use(express.json())
const data = require('./records.json');
const port = 3001;
const fs = require('fs');

function findRecord(record) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].phone == record.phone) {
            return i;
        }
    }
    return -1;
}

function updateRecords(req, res) {
    fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
        if (!err) res.send("success");
        if (err) throw err;
    });
}

function editRecord(edited, res) {
    data[findRecord(edited)] = edited;
    updateRecords(res);
}

function deleteRecord(deleted, res) {
    data.splice(findRecord(deleted), 1);
    updateRecords(res);
}

//API ENDPOINTS
app.get("/api", async (req, res, next) => {
    res.json(data);
});

//Add a record
app.post("/api/add", async (req, res, next) => {
    const add = data.push(req.body);
    updateRecords(req.body, res);
});

//Edit a record
app.get("/api/edit", async (req, res, next) => {
    editRecord(req.body, res);
});

//Delete a record
app.get("/api/delete", async (req, res, next) => {
    deleteRecord(req.body, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));