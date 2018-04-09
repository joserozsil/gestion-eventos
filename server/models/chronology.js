'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema
let m = mongoose

const ChronologySchema = Schema({
    type: String,
    date: Date,
    supervisions: [
        { 
            users: [ 
                { 
                    idUser: String,
                    nameUser: String,
                    idCard: String 
                } 
            ],
            description: String
        }
    ],
    isDelete: Date
});

module.exports = m.model('Chronologies', ChronologySchema);
