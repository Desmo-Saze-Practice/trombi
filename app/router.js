const express = require('express');
const router = express.Router();

// for home page
const mainController = require('./controlllers/main');

// for promos
const promoController = require('./controlllers/pormoControllers');

// for students
const studentController = require('./controlllers/studentController');

router.get('/', mainController.homePage);

router.get('/promos', promoController.allPromos);

router.get('/promos/:id', promoController.currentPromo);

router.get('/promos/:id/students', studentController.studentInPromo);

router.get('/students/:studentid', studentController.currentStudent);

router.use(mainController.error404);

module.exports = router;