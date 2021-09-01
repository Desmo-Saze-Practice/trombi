const { Client } = require('pg');

// const client = new Client('postgresql://postgres:7878@localhost:5432/trombi');

// same with object 
const client = new Client({
    user: 'trombi',
    host: 'localhost',
    database: 'trombi',
    password: 'trombi',
    port: '5432'
});

client.connect();

const queryStr = `SELECT * FROM "promo";`;

console.log('test');

client.query(queryStr, (error, result) => {
    if (error) {
        console.log(error);
        client.end();
        return;
    }
    console.log(result);
    client.end();
});

