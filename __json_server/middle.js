module.exports = (req, res, next) => {
    if (req.url == '/login') {
        if (req.body.name == 'chan' && req.body.password == '123') {
            return res.sendStatus(200)
        } else {
            return res.sendStatus(400);
        }
    }
    next()
}