'use strict'

import { decodeToken } from '../services/jwt'

function isAuth (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            message: "Usuario no autenticado"
        })
    }

    const token = req.headers.authorization

    const decode = decodeToken(token)
        .then(response => {
            req.userToken = response
            next()
        })
        .catch(error => {
            return res.status(403).send({
                code: 103,
                message: "Token no valido"
            })
        })

}

module.exports = isAuth 
