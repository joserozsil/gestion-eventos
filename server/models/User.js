'use strict'

import mongoose from 'mongoose'

import { encrypt } from '../services/password'

let UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            index: true
        },
        idCard: {
            type: String,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: String,
        phone: String,
        password: String,
        token: String,
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
