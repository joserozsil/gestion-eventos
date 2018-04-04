'use strict'

import jwt from 'jwt-simple'
import randtoken from 'rand-token'
import moment from 'moment'
import { settings } from '../config'
import { reject } from 'q';

exports.createToken = (user) => {
    const payload = {
        sub: user.idCard,
        iat: moment().unix,
        exp: moment().add(8, 'hours').unix()
    }
    return jwt.encode(payload, settings.SECRET)
}

exports.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, settings.SECRET)

            if (payload.exp < moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }

            resolve(payload.sub)

        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            })
        }
    })

    return decode;
}

exports.createRefreshToken = (payload) => {
    return randtoken.uid(256)
}