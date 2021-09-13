// const client = require('../db');
const dataMapper = require('../dataMapper');

module.exports = {
    getAllPromos: (req, res) => {
        dataMapper.getAllPromos((error, result) => {
            if (error) {
                throw error;
            }
            res.render('promos', { promos: result.rows });
        });
    },

    currentPromo: (req, res) => {
        const id = req.params.id;
        dataMapper.currentPromo(id, (error, result) => {
            if (error) {
                console.trace(error);
            }
            res.render('promo', { currentPromo: result.rows[0] });
        });
    }
};