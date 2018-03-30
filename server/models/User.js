'use strict'

import Sequelize from 'Sequelize'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
            idCard: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                validate: {
                    not: {
                        args: ["[a-z]", 'i'],
                        msg: "La cedula de identidad solo puede contener valores numéricos"
                    },
                    notEmpty: true,
                    len: [7, 8],
                    isNumeric: true,
                    min: 4000000,
                    max: 30000000
                }
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    is: ["^[a-z]+$", 'i'],
                    notEmpty: true,
                    len: [3, 15]
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
                    is: ["^[a-z]+$", 'i'],
                    notEmpty: true,
                    len: [3, 25]
                }
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: "Ciudad Guayana"
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
    return User
}