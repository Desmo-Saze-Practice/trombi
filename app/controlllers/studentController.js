const promos = require('../../data/promos.json');
const students = require('../../data/students.json');

module.exports = {
    studentInPromo: (req, res) => {
        const promoId = req.params.id;

        const currentStudents = students.filter( students => students.promo.toString() === promoId);


        res.render('studentsInPromo', {currentStudents});
    },
    currentStudent: (req, res, next) => {
        console.log('here');
        const studentId = req.params.studentid;
        console.log(studentId);

        foundStudent = students.find( student => studentId === student.id.toString());
        console.log('found student ', foundStudent);

        if (!foundStudent) {
            next();
            return;
        } else {
            const studentsPromo = promos.find( promo => promo.id === foundStudent.promo);
            console.log('found promo ', studentsPromo);
            
            res.render('currentStudent', {foundStudent, studentsPromo});
        }
        
    }
}