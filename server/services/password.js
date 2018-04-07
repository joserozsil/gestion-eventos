'use stric'

import chalk from 'chalk'
import bcrypt from 'bcrypt'

exports.encrypt = (plainPassword) => {
    const encrypt = new Promise((resolve, reject) => {
        try {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(plainPassword, salt, (err, hash) => {
                    resolve(hash)
                })
            })

        } catch (err) {
            console.log(err)
            reject({
                status: 500,
                message: 'No se ha podido encriptar',
                err: err
            })
        }
    })

    return encrypt;
}

exports.compare = (plainPassword, hash) => {
    const compare = new Promise((resolve, reject) => {
        try {
            bcrypt.compare(plainPassword, hash).then((res) => {
                resolve(res)
            });
        } catch (err) {
            reject({
                status: 500,
                message: 'No se ha podido comparar',
                error: err
            })
        }
    })

    return compare;
}