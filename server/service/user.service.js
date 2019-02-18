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
        return await User.findAll(
            {attributes: { exclude: ["id", "password", "createdAt", "updatedAt"] } }
        )
        .then(users => {
            // TODO Make this cleaner
            for (let i = 0; i < users.length; i++) {
                if (users[i].dataValues.email === email) {
                    return true;
                }
            }
            return false;

        })
        .catch(error => {
            // TODO - error handling.
            console.log(error);
            return error;
        });
    }
};
