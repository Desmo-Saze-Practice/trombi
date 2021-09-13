module.exports = {

    homePage: (req, res) => {
        let message = '';
        if ('studentDeleted' in req.query) {
            message = `L'étudiant à bien été supprimé`;
        }
        console.log(message);
        res.render('index', { message });
    },

    error404: (req, res) => {
        res.status(404).render('404');
    }
}