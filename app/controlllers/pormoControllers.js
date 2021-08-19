const promos = require('../../data/promos.json');

module.exports = {
    allPromos: (req, res) => {
        res.render('promos', { promos });
    },

    currentPromo: (req, res) => {
        const promoId = req.params;
    
        const currentPromo = promos.find( promo => promoId.id === promo.id.toString());
    
        res.render('promo', {currentPromo});
    }
};