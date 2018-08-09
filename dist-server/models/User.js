'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _password = require('../services/password');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = _mongoose2.default.Schema({
    idCard: {
        type: String,
        unique: true,
        index: true
    },
    firstName: String,
    lastName: String,
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
});

UserSchema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) return next();

    (0, _password.encrypt)(user.password).then(function (success) {
        user.password = success;
        next();
    }).catch(function (err) {
        if (err) console.log(err);
    });
});

module.exports = _mongoose2.default.model('users', UserSchema);