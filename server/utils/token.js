const jwt = require('jsonwebtoken');
const env = require('../config/env');

module.exports = {
    sign: id => {
        return jwt.sign({
            iss: 'MakerSpace Management System',
            sub: id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, env.jwt.secret);
    }
};
