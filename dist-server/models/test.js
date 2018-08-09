'use strict';

var _Sequelize = require('Sequelize');

var _Sequelize2 = _interopRequireDefault(_Sequelize);

var _password = require('../services/password');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// deprecate
// deprecate

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        idCard: {
            type: _Sequelize2.default.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                not: {
                    args: ["[a-z]", 'i'],
                    msg: "La cédula de identidad solo puede contener valores numéricos"
                },
                notEmpty: true,
                len: [7, 8],
                isNumeric: true,
                min: {
                    args: 4000000,
                    msg: "La cédula de identidad es invalida"
                },
                max: {
                    args: 35000000,
                    msg: "La cédula de identidad es invalida"
                }
            }
        },
        firstName: {
            type: _Sequelize2.default.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-zA-Z\s]*$/,
                    msg: "Solo puede contener letras y espacios"
                },
                notEmpty: true,
                len: [3, 25]
            },
            get: function get() {
                return this.getDataValue('firstName').charAt(0).toUpperCase() + this.getDataValue('firstName').slice(1);
            },
            set: function set(value) {
                this.setDataValue('firstName', value.toLowerCase());
            }
        },
        lastName: {
            type: _Sequelize2.default.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-zA-Z\s]*$/,
                    msg: "Solo puede contener letras y espacios"
                },
                notEmpty: true,
                len: [3, 30]
            },
            get: function get() {
                return this.getDataValue('lastName').charAt(0).toUpperCase() + this.getDataValue('lastName').slice(1);
            },
            set: function set(value) {
                this.setDataValue('lastName', value.toLowerCase());
            }
        },
        address: {
            type: _Sequelize2.default.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [12, 100],
                    msg: "La dirección debe posee entre 12 a 50 caracteres"
                }
            }
        },
        phone: {
            type: _Sequelize2.default.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [11, 15],
                    msg: "El número telefónico debe posee entre 7 a 25 caracteres"
                }
            }
        },
        password: {
            type: _Sequelize2.default.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: {
                    args: [8, 12],
                    msg: "La longitud de la contraseña debe ser entre 8 y 12 caracteres"
                },
                specialCharacter: function specialCharacter(value) {
                    var one = value.indexOf('$', 0);
                    var two = value.indexOf('#', 0);
                    var three = value.indexOf(';', 0);
                    var four = value.indexOf('.', 0);
                    var five = value.indexOf('(', 0);
                    var six = value.indexOf(')', 0);

                    if (one < 0 && two < 0 && three < 0 && four < 0 && five < 0 && six < 0) {
                        throw new Error('La contraseña requiere al menos uno de los siguientes caracteres especiales: $ # ( ) ; . ');
                    }
                },
                upperCase: function upperCase(value) {
                    var patron = /[A-Z]/g;

                    if (value.match(patron) == null) {
                        throw new Error('La contraseña debe contener al menos un caracter en mayúscula');
                    }
                }
            }
        },
        createdAt: {
            type: _Sequelize2.default.DATE,
            allowNull: false,
            defaultValue: _Sequelize2.default.NOW
        },
        updatedAt: _Sequelize2.default.DATE,
        deletedAt: {
            type: _Sequelize2.default.DATE,
            allowNull: true,
            defaultValue: null
        }
    });

    User.beforeCreate(function (user, options) {
        return (0, _password.encrypt)(user.password).then(function (success) {
            user.password = success;
        }).catch(function (err) {
            if (err) console.log(err);
        });
    });

    return User;
};