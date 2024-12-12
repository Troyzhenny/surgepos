// connects db to server
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '020421',
    port: 5432,
    database: 'surgepos'
});

module.exports = pool;