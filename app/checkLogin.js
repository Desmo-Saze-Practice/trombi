module.exports = (req, res, next) => {

    if (req.session.username && req.session.username === 'Florian') {
        console.log('found user');
        next();
    } else {
        console.log('denied access');
        res.status(403).render('403');
    }
}