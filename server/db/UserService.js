const database = require('./database');

class UserService {

    static async addUser(email) {
        return (await database.query('INSERT INTO user (email) VALUES (?)', [email])).insertId;
    }

    static async fetchUser(id) {
        return (await database.query('SELECT * FROM user WHERE id = ?', [id]))[0].id;
    }
}

module.exports = UserService;
