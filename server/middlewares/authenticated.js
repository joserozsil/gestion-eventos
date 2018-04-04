'use strict'

const { decodeToken } = require('../services/jwt')
const responser = require('../services/response')

function isAuth (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send(responser.response(403, {}, "Usuario no autenticado"))
    }

    const token = req.headers.authorization

    const decode = decodeToken(token)
        .then(response => {
            req.userToken = response
            next()
        })
        .catch(error => {
            return res.status(error.status).send(responser.response(error.status, {}, "Token no valido", error))
        })

}

module.exports = isAuth 
