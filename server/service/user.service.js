const db = require('../config/db.config');
const User = db.users;

module.exports = {
    create: async (email, password, callback) => {
        return await User.create({ email, password })
            .then(user => {
                return callback(null, user);
            })
            .catch(error => {
                return callback(error, null);
            });
    },

    findById: async (id, callback) => {
        return await User.findByPk(id, { attributes: { exclude: ["createdAt", "updatedAt"] } })
            .then(user => {
                return callback(null, user);
            })
            .catch(error => {
                return callback(error, null);
            });
    },

    findByEmail: async (email, callback) => {
        return await User.findOne({ where: { email }, attributes: { exclude: ["createdAt", "updatedAt"] } })
            .then(user => {
                return callback(null, user);
            })
            .catch(error => {
                return callback(error, null);
            });
    },

    emailUsed: async (email, callback) => {
        return await User.findOne({ where: { email }, attributes: ['email'] })
            .then(user => {
                return callback(null, !!user)
            })
            .catch(error => {
                return callback(error, null);
            });
    }
};
