'use strict'

import { decodeToken } from '../services/jwt'
import Response from '../services/response'

function isAuth (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send(Response.handleError(403, {}, "Usuario no autenticado"))
    }

    const token = req.headers.authorization

    const decode = decodeToken(token)
        .then(response => {
            req.userToken = response
            next()
        })
        .catch(error => {
            return res.status(error.status).send(Response.handleError(error.status, {}, "Token no valido", error))
        })

}

module.exports = isAuth 
