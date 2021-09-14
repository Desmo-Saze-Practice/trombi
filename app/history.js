module.exports = (req, res, next) => {

    if (!req.session.history) {
        req.session.history = [];
    }
    req.session.history.push(req.originalUrl);
    console.log(req.session.history);
    next();
}