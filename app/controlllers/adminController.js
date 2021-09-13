// const client = require('../db');
const dataMapper = require('../dataMapper');

module.exports = {

    showEditStudent: (req, res) => {
        dataMapper.getAllPromos((error, result) => {
            if (error) {
                throw error;
            }
            res.render('editStudent', { promos: result.rows });
        });
    },

    insertStudent: (req, res) => {

        const data = req.body;

        const formError = [];

        if (!data.promo_id) {
            formError.push('La promotion est obligatoire');
        }

        if (!data.first_name) {
            formError.push('Le prénom est obligatoire');
        }

        if (!data.last_name) {
            formError.push('Le nom est obligatoire');
        }

        if (!data.github_username) {
            formError.push('Le pseudo github est obligatoire');
        }

        // en cas d'erreur, on réaffiche le formulaire avec les erreurs
        if (formError.length > 0) {
            
            if (error) {
                res.send(error);
            }

            dataMapper.getAllPromos((error, result) => {
                console.log('still ok ?');
                if (error) {
                    res.send(error);
                    return;
                }
                res.render('editStudent', { promos: result.rows, formError });
            });

            // on met un return ici pour évité l'insertion de données incorrectes en bdd
            return;
        } else {

            dataMapper.insertStudent(data, (error, result, myError) => {
    
                if (error) {
                    res.send(error);
                    return;
                }
                
                if(myError) {
                    res.send(myError);
                }
                
                res.redirect(`/promos/${data.promo_id}/students`);
    
                // dataMapper.getAllPromos(data, (error, result) => {
                //     if (error) {
                //         res.send(error);
                //     }
                //     res.render('editStudent', { promos: result.rows });
                // });
            })
        }
    },

    deleteStudent: (req, res, next) => {
        const student_id = Number(req.params.studentid);

        if (!student_id) {
            console.log(`Pas d'étudiant trouvé`);
            next();
            return;
        }
        dataMapper.deleteStudent(student_id, (error, result) => {
            if (error) {
                res.send(error);
                return;
            }
            // avec le "?" dans l'url, on permet de recupérer des informations via : req.querry.studentDeleted
            res.redirect('/?studentDeleted');
        });
    }
}