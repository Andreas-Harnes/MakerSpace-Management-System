const db = require('../config/db.config');
const User = db.users;

module.exports = {
    create: async (email, password) => {
        User.create({
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

    findById: async (id) => {
        User.findById(id,
            {attributes: { exclude: ["createdAt", "updatedAt"] } }
        )
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
            console.log('--- ERROR ---');
            console.log(error);
            return error;
        });
    }
};
