const express = require('express');
const UserService = require('../../db/UserService');

const router = express.Router();

router.post('/', async (req, res) => {
    const id = await UserService.addUser(req.body.email);
    res.status(201).send(`New user saved with id ${id}!`);
});

module.exports = router;
