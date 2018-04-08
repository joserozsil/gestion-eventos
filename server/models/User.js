'use strict'

import Sequelize from 'Sequelize'
import { encrypt } from '../services/password'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
            idCard: {
                type: Sequelize.INTEGER,
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
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: {
                        args: /^[a-zA-Z\s]*$/,
                        msg: "Solo puede contener letras y espacios"
                    },
                    notEmpty: true,
                    len: [3, 25]
                },
                get() {
                    return this.getDataValue('firstName').charAt(0).toUpperCase() + this.getDataValue('firstName').slice(1)
                },
                set(value) {
                    this.setDataValue('firstName', value.toLowerCase())
                }
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: {
                        args: /^[a-zA-Z\s]*$/,
                        msg: "Solo puede contener letras y espacios"
                    },
                    notEmpty: true,
                    len: [3, 30]
                },
                get() {
                    return this.getDataValue('lastName').charAt(0).toUpperCase() + this.getDataValue('lastName').slice(1)
                },
                set(value) {
                    this.setDataValue('lastName', value.toLowerCase())
                }
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [12, 100],
                        msg: "La dirección debe posee entre 12 a 50 caracteres"
                    }
                }
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [11, 15],
                        msg: "El número telefónico debe posee entre 7 a 25 caracteres"
                    }
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    len: {
                        args: [8, 12],
                        msg: "La longitud de la contraseña debe ser entre 8 y 12 caracteres"
                    },
                    specialCharacter(value) {
                        let one = value.indexOf('$', 0)
                        let two = value.indexOf('#', 0)
                        let three = value.indexOf(';', 0)
                        let four = value.indexOf('.', 0)
                        let five = value.indexOf('(', 0)
                        let six = value.indexOf(')', 0)

                        if (one < 0 && two < 0 && three < 0 && four < 0 && five < 0 && six < 0) {
                            throw new Error('La contraseña requiere al menos uno de los siguientes caracteres especiales: $ # ( ) ; . ')
                        }
                    },
                    upperCase(value) {
                        let patron = /[A-Z]/g

                        if (value.match(patron) == null) {
                            throw new Error('La contraseña debe contener al menos un caracter en mayúscula')
                        }
                    }
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            updatedAt: Sequelize.DATE,
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            }
        }

    )

    User.beforeCreate((user, options) => {
        return encrypt(user.password)
        .then(success => {
            user.password = success
        })
        .catch(err => {
            if (err) console.log(err)
        })
    })

    return User
}