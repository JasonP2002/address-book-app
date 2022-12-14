const express = require('express');
const app = express();
app.use(express.json())
const data = require('./records.json');
const port = 3001;
const fs = require('fs');

function findRecord(record) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === record.email) {
            return i;
        }
    }
    return -1;
}

function updateRecords(res) {
    fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
        if (!err) res.send("success");
        if (err) throw err;
    });
}

function editRecord(edited, res) {
    var i = findRecord(edited)
    if (i != -1) {
        data[findRecord(edited)] = edited;
        updateRecords(res);
    } else {
        res.send("could not find record");
    }
}

function deleteRecord(deleted, res) {
    var i = findRecord(deleted);
    if (i != -1) {
        data.splice(findRecord(deleted), 1);
        updateRecords(res);
    } else {
        res.send("could not find record");
    }
}

//API ENDPOINTS
app.get("/api", async (req, res, next) => {
    res.json(data);
});

//Add a record
app.post("/api/add", async (req, res, next) => {
    const add = data.push(req.body);
    updateRecords(res);
});

//Edit a record
app.post("/api/edit", async (req, res, next) => {
    editRecord(req.body, res);
});

//Delete a record
app.post("/api/delete", async (req, res, next) => {
    deleteRecord(req.body, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));