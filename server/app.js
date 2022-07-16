const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.get('/bills', (req, res) => {
    fs.readFile(`${__dirname}/ElectricBillApi/billapi.json`, "utf8", (err, data) => {
        res.send(data);
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Starting Chrome on ${PORT}`);
});