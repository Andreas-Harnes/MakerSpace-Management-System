const UserService = require('../services/user');

module.exports = {
    signUp: async (req, res) => {
        if (await UserService.emailInUse(req.body.email)) {
            return res.status(403).json({ error: 'Email is already in use.'});
        }

        await UserService.addUser(req.body.email, req.body.password);

        // TODO Generate ID and send to user.
        res.status(201).send("New user created!");
    }
};
