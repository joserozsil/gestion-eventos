'use stric'

import bcrypt from 'bcrypt'

exports.encrypt = (plainPassword) => {
    return new Promise((resolve, reject) => {
        try {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(plainPassword, salt, (err, hash) => {
                    resolve(hash)
                })
            })

        } catch (err) {
            reject({
                status: 500,
                message: 'No se ha podido encriptar',
                err
            })
        }
    })
}

exports.compare = (plainPassword, hash) => {
    return new Promise((resolve, reject) => {
        try {
            bcrypt.compare(plainPassword, hash).then((res) => {
                resolve(res)
            })
        } catch (err) {
            reject({
                status: 500,
                message: 'No se ha podido comparar',
                error: err
            })
        }
    })
}