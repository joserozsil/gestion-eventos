'use strict'

import { createToken } from '../services/jwt'
import { compare } from '../services/password'
import responser from '../services/response'
import models from '../models'
import chalk from 'chalk'

const operations = {
    signIn: (req, res) => {
        models.User.findOne({ where: { idCard: req.body.idCard } })
            .then(user => {
                if( user == null ) {
                    return res.status(403).json(
                        responser.response(403, {} , "El usuario no coincide con nuestros registros")
                    )
                }
                const compared = compare(req.body.password, user.password)
                .then((value) => {
                    if( value ) {
                        return res.status(200).json(
                            responser.response(200, { token: createToken(user) } , "Usuario logeado correctamente")
                        )
                    } else {
                        return res.status(403).json(
                            responser.response(403, {} , "La contraseña no coincide con nuestros registros")
                        )
                    }
                })
                .catch(error => {
                    return res.status(400).json(
                        responser.error(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                    )
                })
                
            }).catch(error => {
                return res.status(400).json(
                    responser.error(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error)
                )
            })
    }
}

export default operations