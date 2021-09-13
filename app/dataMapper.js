const client = require("./db");

module.exports = {
    getAllPromos: (callback) => {
        client.query('SELECT * FROM "promo"', (error, result) => {
            if (error) {
                console.error(error);
            }
            callback(error, result);
        });
    },

    currentPromo: (id, callback) => {
        client.query(`SELECT * FROM "promo" WHERE "id"=$1`, [id], callback);
    },

    studentInPromo: (promoId, callback) => {
        client.query(`SELECT * FROM "student" WHERE "promo_id" = $1`, [promoId], callback);
    },

    insertStudent: (studentInfo, callback) => {
        client.query(`
        INSERT INTO "student" 
        (
            "first_name", 
            "last_name", 
            "github_username", 
            "promo_id"
        ) VALUES ($1, $2, $3, $4)`,
            [studentInfo.first_name,
            studentInfo.last_name,
            studentInfo.github_username,
            studentInfo.promo_id],
            (error, result) => {
                if (error) {
                    console.error(error);
                }

                const myError = "";
                if (result.rowCount === 0) {
                    myError = `aucun étudiant n'a été ajouté`;
                    console.error(myError);
                }

                callback(error, result, myError);
            }
        );
    },

    deleteStudent: (studentid, callback) => {

        const queryObj = {
            text: `DELETE FROM "student" WHERE id = $1`,
            values: [studentid]
        }

        client.query(queryObj, callback);
    }
}