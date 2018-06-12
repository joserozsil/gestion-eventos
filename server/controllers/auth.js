'use strict'

import { createToken } from '../services/jwt'
import { compare } from '../services/password'
import Response from '../services/response'
import User from '../models/user'

const operations = {
    signIn: async (req, res) => {
        await User.find({ id: req.body.id })
            .then(user => {
                if( user == null ) {
                    return res.status(403).json(
                        Response.handleError(403, {} , "El usuario no coincide con nuestros registros")
                    )
                }
                const compared = compare(req.body.password, user.password)
                .then((value) => {
                    if( value ) {
                        return res.status(200).json(
                            Response.handleError(200, { token: createToken(user), user: user } , "Usuario logeado correctamente")
                        )
                    } else {
                        return res.status(403).json(
                            Response.handleError(403, {} , "La contraseña no coincide con nuestros registros")
                        )
                    }
                })
                .catch(error => {
                    return res.status(400).json(
                        Response.error(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                    )
                })
                
            }).catch(error => {
                return res.status(400).json(
                    Response.error(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                )
            })
    }
}

export default operations