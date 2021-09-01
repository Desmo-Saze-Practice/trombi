const client = require('../db');

module.exports = {
    allPromos: (req, res) => {
        const queryStr = `SELECT * FROM promo;`;
        client.query(queryStr, (error, data) => {
            if (error) {
                console.trace(error);
            }
            res.render('promos', { promos: data.rows });
        });
    },

    currentPromo: (req, res) => {
        const id = req.params.id;
        client.query(`SELECT * FROM "promo" WHERE "id"=$1;`, [id], (error, data) => {
            if (error) {
                console.trace(error);
            }
            res.render('promo', { currentPromo: data.rows[0] });
            console.log(data.rows[0]);
        });
    }
};