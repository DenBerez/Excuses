const express = require("express");
const path = require('path');
const pool = require("./database/index.js");
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

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