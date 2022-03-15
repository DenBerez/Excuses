const express = require("express");
const pool = require("./database/index.js");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000);

app.get('/products', async (req, res) => {
  try {
    const request = await pool.query(
      `SELECT * FROM product LIMIT 10;`
    );
    res.send(request.rows);
  } catch (err) {
    console.error(err);
  };
});