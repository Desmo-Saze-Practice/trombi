const client = require('../db');
const dataMapper = require('../dataMapper');

module.exports = {
    studentInPromo: (req, res) => {
        const promoId = req.params.id;
        dataMapper.studentInPromo(promoId, (err, result) => {
            if (err) {
                throw err;
            } else {
                res.render('studentsInPromo', { currentStudents: result.rows });
            }
        })

    },
    currentStudent: (req, res, next) => {
        const studentId = req.params.studentid;

        client.query(`SELECT * FROM "student" WHERE "id" = $1`, [studentId], (err, data) => {
            const student = data.rows[0];
            const promoId = student.promo_id;
            if (data.rowCount === 0) {
                next();
                return;
            }
            client.query(`SELECT * FROM "promo" WHERE "id" = $1`, [promoId], (err, data) => {
                const promo = data.rows[0];
                if (err) {
                    throw err;
                }

                res.render('currentStudent', { currentStudent: student, currentPromo: promo });
            });
        })
    }
}