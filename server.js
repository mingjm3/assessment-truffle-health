const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Keep the medical bills in memory
let medicalBills = [];

// GET /items: returns a list of medical bills
app.get('/items', (req, res) => {
    res.json(medicalBills);
});