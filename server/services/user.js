const database = require('../db/database');

module.exports = {
    addUser: async (email, password) => {
        return (await database.query('INSERT INTO user (email, password) VALUES (?, ?)',[email, password])).insertId;
    },

    emailInUse: async (email) => {
        return (await database.query('SELECT email FROM user WHERE email = ? LIMIT 1', [email])).length > 0;
    },

    fetchUser: async (id) => {
        return (await database.query('SELECT * FROM user WHERE id = ? LIMIT 1', [id]))[0];
    }
};
