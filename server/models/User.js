'use strict'

import mongoose from 'mongoose'
import { encrypt } from '../services/password'

let UserSchema = mongoose.Schema(
    {
        idCard: String,
        firstName: String,
        lastName: String,
        address: String,
        phone: String,
        password: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: Date,
        deletedAt: Date
    }
)

UserSchema.pre('save', function (next) {
    let user = this

    if (!user.isModified('password')) return next()

    encrypt(user.password)
    .then(success => {
        user.password = success
        next()
    })
    .catch(err => {
        if (err) console.log(err)
    })
})

module.exports = mongoose.model('users', UserSchema)
