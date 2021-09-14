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
    },

    history: (req, res) => {
        const history = req.session.history;
        res.render('history', { history });
    },

    showLogin: (req, res) => {
        res.render('login');
    },

    saveLogin: (req, res) => {
        req.session.username = req.body.username;
        console.log(req.session.username);
        res.redirect('/');
    }
}