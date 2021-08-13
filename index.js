// envirionement viriable
require('dotenv').config();

// Express
const express = require('express');
const app = express();

// router
const router = require('./app/router');

// template engine EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// static files
app.use(express.static('assets'));

// PORT
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('yo');
//     console.log('wesh');
// });

app.use(router);

app.listen(PORT, () => {
    console.log(`server live on http://localhost:${PORT}`);
});