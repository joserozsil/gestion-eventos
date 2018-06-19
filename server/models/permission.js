'use strict'

import mongoose from 'mongoose'

let PermissionSchema = mongoose.Schema(
    {
        name: String,
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: Date,
        deletedAt: Date
    }
)

module.exports = mongoose.model('permissions', PermissionSchema)
