// envirionement variable
require('dotenv').config();

/**** EXPRESS ****/
const express = require('express');
const app = express();
// router
const router = require('./app/router');

/***** VIEWS *****/
// template engine EJS
app.set('view engine', 'ejs');
//defines views file
app.set('views', './app/views');
// static files
app.use(express.static('assets'));

// to transform req body to json
app.use(express.urlencoded({extended: true}));

// PORT
const PORT = process.env.PORT || 3000;


// routage
app.use(router);

app.listen(PORT, () => {
    console.log(`server live on http://localhost:${PORT}`);
});