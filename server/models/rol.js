'use strict'

import mongoose from 'mongoose'

let RolSchema = mongoose.Schema(
    {
        name: String,
        permissions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'permissions'
        }],
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: Date,
        deletedAt: Date
    }
)

module.exports = mongoose.model('rols', RolSchema)
