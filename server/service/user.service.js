const db = require('../config/db.config');
const User = db.users;

module.exports = {
    create: async (email, password) => {
        return await User.create({
            email,
            password
        })
        .then(user => {
            return user;
        })
        .catch(error => {
            // TODO - error handling.
            console.log(error);
            return error;
        });
    },

    findById: async (id, callback) => {
        return await User.findByPk(id,
            {attributes: { exclude: ["createdAt", "updatedAt"] } }
        )
        .then(user => {
            return callback(null, user);
        })
        .catch(error => {
            return callback(error, null);
        });
    },

    findByEmail: async (email) => {
        return await User.findOne({
            where: { email },
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        .then(user => {
            return user;
        })
        .catch(error => {
            // TODO - error handling.
            console.log(error);
            return error;
        });
    },

    emailUsed: async (email) => {
        return await User.findOne({
            where: { email },
            attributes: ['email']
        })
        .then(user => {
            return !!user;
        })
        .catch(error => {
            // TODO - error handling.
            console.log(error);
            return error;
        });
    }
};
