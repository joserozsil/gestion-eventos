'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema
let m = mongoose

const ChronologySchema = Schema(
    {
        type: String,
        date: Date,
        supervision: { 
            users: [ 
                { 
                    idCard: String,
                    nameUser: String
                } 
            ],
            description: String
        },
        io: {
            description: String,
            nameUser: String,
            idCard: String,
            tp: String,
            rol: String
        },
        guard: {
            users: [ 
                { 
                    idCard: String,
                    nameUser: String
                }
            ],
            evidences: [
                {
                    name: String
                }
            ],
            description: String,
            tp: String
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {

        },
        deletedAt: Date
    }
);

module.exports = m.model('chronologies', ChronologySchema);
