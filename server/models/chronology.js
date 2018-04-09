'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema
let m = mongoose

const ChronologySchema = Schema({
    type: String,
    date: Date,
    supervision:
        { 
            users: [ 
                { 
                    idUser: String,
                    nameUser: String
                } 
            ],
            description: String
        }
    ,
    isDelete: Date
});

module.exports = m.model('Chronologies', ChronologySchema);
