const express = require('express');
const router = express.Router();

const promos = require('../data/promos.json');
const students = require('../data/students.json');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/promos', (req, res) => {
    res.render('promos', { promos });
});

router.get('/promos/:id', (req, res) => {
    const promoId = req.params;
    console.log('id is ', promoId);

    const currentPromo = promos.find( promo => promoId.id === promo.id.toString());

    res.render('promo', {currentPromo});
});

// router.get('/promo/:id/students')

router.use((req, res) => {
    res.status(404).render('404');
});

module.exports = router;