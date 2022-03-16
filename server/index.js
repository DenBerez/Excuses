const express = require("express");
const path = require('path');
const pool = require("./database/index.js");
const request = require('request');
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/excuse/office', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/office', (err, resp, body) => {
    res.send(body);
  })
});

app.get('/excuse/family', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/family', (err, resp, body) => {
    res.send(body);
  })
});

app.get('/excuse/children', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/children', (err, resp, body) => {
    res.send(body);
  })
});

app.get('/excuse/party', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/party', (err, resp, body) => {
    res.send(body);
  })
});

app.get('/excuse/college', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/college', (err, resp, body) => {
    res.send(body);
  })
});

app.get('/quote', (req, res) => {
  request('https://zenquotes.io/api/random', (err, resp, body) => {
    res.send(body);
  })
});