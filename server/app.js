const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001

app.get('/', (req, res) => {
    fs.readFile(`${__dirname}/ElectricBillApi/billapi.json`, "utf8", (err, data) => {
        res.send(data);
    })
})

app.get('/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/:id/:title', (req, res) => {
    res.send(req.params);
})

app.get('/:id/:title/:day', (req, res) => {
    res.send(req.query);
})

app.listen(PORT, (req, res) => {
    console.log(`Starting Chrome on ${PORT}`);
});