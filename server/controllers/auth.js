'use strict'

import { createToken } from '../services/jwt'
import { compare } from '../services/password'
import User from '../models/user'

const operations = {
    signIn: async (req, res) => {
        await User.find({ idCard: req.body.idCard, deletedAt: null })
            .then(user => {
                if( !user || user == null || user == undefined || !user.length) {
                    return res.status(403).json({ 
                        message: "El usuario no coincide con nuestros registros"
                    })
                } else {
                    const compared = compare(req.body.password, user[0].password)
                    .then((value) => {
                        if( value ) {
                            return res.status(200).json({
                                token: createToken(user),
                                user: user[0],
                                message: "Usuario logeado correctamente"
                            })
                        } else {
                            return res.status(403).json({
                                message: "Las credenciales no coinciden con nuestros registros"
                            })
                        }
                    })
                    .catch(error => {
                        return res.status(400).json({
                            message: "Algo ha salido mal, por favor intentelo nuevamente"
                        })
                    })
                }
                
            }).catch(error => {
                return res.status(400).json({
                    message: "Algo ha salido mal, por favor intentelo nuevamente"
                })
            })
    }
}

export default operations