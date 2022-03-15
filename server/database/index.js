const { Pool } = require('pg');

const pool = new Pool({
  user: 'ubuntu',
  host: 'localhost:3000',
  database: 'pd',
  password: 'dennis',
  port: 5432,
});

module.exports = pool;