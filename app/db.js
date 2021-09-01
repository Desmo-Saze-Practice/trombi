const { Client } = require('pg');

const client = new Client({
    user: 'trombi'
});

client.connect();

module.exports = client;