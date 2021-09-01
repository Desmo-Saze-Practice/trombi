const client = require('../db');

module.exports = {
    studentInPromo: (req, res) => {
        const studentsQuery = `SELECT * FROM "student" WHERE "promo_id" = $1`;
        const promoId = req.params.id;

        client.query(studentsQuery, [promoId], (err, result) => {
            if (err) {
                throw err;
            } else {
                res.render('studentsInPromo', { currentStudents: result.rows });
            }
        })

    },
    currentStudent: (req, res, next) => {
        const studentQuery = `SELECT * FROM "student" WHERE "id" = $1`;
        const studentId = req.params.studentid;

        client.query(studentQuery, [studentId], (err, data) => {
            const student = data.rows[0];
            const promoQuery = `SELECT * FROM "promo" WHERE "id" = $1`;
            const promoId = student.promo_id;
            if (data.rowCount === 0) {
                next();
                return;
            }
            client.query(promoQuery, [promoId], (err, data) => {
                const promo = data.rows[0];
                if (err) {
                    throw err;
                }

                res.render('currentStudent', { currentStudent: student, currentPromo: promo });
            });
        })
    }
}