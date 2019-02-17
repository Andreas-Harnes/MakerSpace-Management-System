const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    sign: id => {
        return jwt.sign({
            iss: 'MakerSpace Management System',
            sub: id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, config.jwt.secret);
    }
};
