const database = require('./database');

class UserService {

    static async addUser() {
        // TODO
        await database.query('SELECT "Hello World!"')
            .then(rows => {
                console.log(rows[0]);
            })
            .catch(err => {
                console.log(err)
            });
    }
}

module.exports = UserService;
