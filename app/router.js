const express = require('express');
const router = express.Router();

// for home page
const mainController = require('./controlllers/mainController');

// for promos
const promoController = require('./controlllers/pormoControllers');

// for students
const studentController = require('./controlllers/studentController');

// For admin
const adminController = require('./controlllers/adminController');


// Main
router.get('/', mainController.homePage);

// Promo
router.get('/promos', promoController.getAllPromos);

router.get('/promos/:id', promoController.currentPromo);

// Student
router.get('/promos/:id/students', studentController.studentInPromo);

router.get('/students/:studentid', studentController.currentStudent);

router.get('/student/:studentid/delete', adminController.deleteStudent);

// Admin
router.get('/student/edit', adminController.showEditStudent);

router.post('/student/edit', adminController.insertStudent);

// 404
router.use(mainController.error404);

module.exports = router;