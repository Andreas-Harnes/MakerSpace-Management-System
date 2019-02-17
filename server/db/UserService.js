const database = require('./database');

class UserService {

    static async addUser(email, password) {
        return (await database.query('INSERT INTO user (email, password) VALUES (?, ?)',[email, password])).insertId;
    }

    static async emailRegistered(email) {
        return (await database.query('SELECT email FROM user WHERE email = ? LIMIT 1', [email])).length > 0;
    }

    static async fetchUser(id) {
        return (await database.query('SELECT * FROM user WHERE id = ? LIMIT 1', [id]))[0].id;
    }
}

module.exports = UserService;
