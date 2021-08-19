const express = require('express');
const router = express.Router();

// for controllers
const mainController = require('./controlllers/main');

// for promos
const promoController = require('./controlllers/pormoControllers');

router.get('/', mainController.homePage);

router.get('/promos', promoController.allPromos);

router.get('/promos/:id', promoController.currentPromo);

// router.get('/promotion/:id/students', studentController.studentInPromo);

router.use(mainController.error404);

module.exports = router;