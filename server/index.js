const express = require('express');
const path = require('path');
const request = require('request');
const pool = require('./database/index.js');

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/excuses/office', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/office', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/excuses/family', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/family', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/excuses/children', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/children', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/excuses/party', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/party', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/excuses/college', (req, res) => {
  request('https://excuser.herokuapp.com/v1/excuse/college', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/quote', (req, res) => {
  request('https://zenquotes.io/api/random', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/joke', (req, res) => {
  request('https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit', (err, resp, body) => {
    res.send(body);
  });
});

app.get('/excuses/previous', async (req, res) => {
  try {
    const request = await pool.query(
      'SELECT * FROM prevEx ORDER BY id DESC LIMIT 5;',
    );
    res.send(request.rows);
  } catch (err) {
    console.error(err);
  }
});

app.get('/excuses/previous/:name', async (req, res) => {
  try {
    const quer = req.params.name || '';
    const request = await pool.query('SELECT * FROM prevEx WHERE "name" = $1 ORDER BY id DESC LIMIT 5;', [quer]);
    res.send(request.rows);
  } catch (err) {
    console.error(err);
  }
});

app.post('/excuses/previous', async (req, res) => {
  try {
    const {
      name, purpose, category, excuse,
    } = req.body;
    const request = await pool.query('INSERT INTO prevEx (name, purpose, category, excuse) VALUES ($1, $2, $3, $4);', [name, purpose, category, excuse]);
  } catch (err) {
    console.error(err);
  }
});
