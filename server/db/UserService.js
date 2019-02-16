const database = require('./database');

class UserService {

    static async addUser(email) {
        return (await database.query('INSERT INTO user (email) VALUES (?)', [email])).insertId;
    }
}

module.exports = UserService;
