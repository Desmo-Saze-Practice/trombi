module.exports = {

    homePage: (req, res) => {
        res.render('index')
    },
    error404: (req, res) => {
        res.status(404).render('404');
    }
}