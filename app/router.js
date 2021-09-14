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

// to pass form information from login to every route
router.use((req, res, next) => {
    res.locals.username = req.session.username;
    next();
});

// for login
const checkLogin = require('./checkLogin');

// Main
router.get('/', mainController.homePage);

// Login
router.get('/login', mainController.showLogin);
router.post('/login', mainController.saveLogin);

// Promo
router.get('/promos', promoController.getAllPromos);

router.get('/promos/:id', promoController.currentPromo);

// Student
router.get('/promos/:id/students', studentController.studentInPromo);

router.get('/students/:studentid', studentController.currentStudent);

// Admin
router.get('/student/edit', checkLogin, adminController.showEditStudent);

router.post('/student/edit', checkLogin, adminController.insertStudent);

router.get('/student/:studentid/delete', checkLogin, adminController.deleteStudent);

// History
router.get('/history', mainController.history);

// 404
router.use(mainController.error404);

module.exports = router;