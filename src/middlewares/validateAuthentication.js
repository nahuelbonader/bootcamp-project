const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkey';

exports.validateAuthentication = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("Authorization header is missing");
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).send("Authorization token is missing");
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send("Invalid token");
        }
        req.decoded = decoded;
        next();
    });
};