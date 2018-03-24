const User = require('../models/').User;

module.exports = {
    list(req, res) {
        console.log('Recibiendo petición')
        return User
            .findAll()
            .then((users) => res.status(200).send(users))
            .catch((error) => res.status(400).send(error));
    }
};