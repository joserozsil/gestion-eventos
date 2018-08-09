'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var m = _mongoose2.default;

var ChronologySchema = Schema({
    type: String,
    date: Date,
    supervision: {
        users: [{
            idCard: String,
            nameUser: String
        }],
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
        users: [{
            idCard: String,
            nameUser: String
        }],
        evidences: [{
            name: String
        }],
        description: String,
        tp: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {},
    deletedAt: Date
});

module.exports = m.model('chronologies', ChronologySchema);