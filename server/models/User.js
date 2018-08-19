'use strict'

import { encrypt } from '../services/password'

module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define('Usuario', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            cedula: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
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
            nombre: {
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
                    return this.getDataValue('nombre').charAt(0).toUpperCase() + this.getDataValue('nombre').slice(1)
                },
                set(value) {
                    this.setDataValue('nombre', value.toLowerCase())
                }
            },
            apellido: {
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
                    return this.getDataValue('apellido').charAt(0).toUpperCase() + this.getDataValue('apellido').slice(1)
                },
                set(value) {
                    this.setDataValue('apellido', value.toLowerCase())
                }
            },
            direccion: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [12, 100],
                        msg: "La dirección debe posee entre 12 a 50 caracteres"
                    }
                }
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [11, 25],
                        msg: "El número telefónico debe posee entre 7 a 25 caracteres"
                    }
                }
            },
            telefono_casa: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    len: {
                        args: [11, 25],
                        msg: "El número telefónico debe posee entre 7 a 25 caracteres"
                    }
                }
            },
            contraseña: {
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
            rol: {
                type: Sequelize.ENUM('ADMINISTRADOR', 'RECEPCION', 'OPERADOR_BALISTICA', 'OPERADOR_LABORATORIO', 'OPERADOR_HECHOS'),
                allowNull: false
            },
            f_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            f_actualizacion: Sequelize.DATE,
            f_eliminacion: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            }
        },
        {
            tableName: 'usuarios',
            underscored: true
        }
    )

    User.beforeCreate(user => {
        return encrypt(user.contraseña)
        .then(success => {
            user.contraseña = success
        })
        .catch(err => {
            if (err) {
                return res.status(400).json(err)
            }
        })
    })


    User.afterValidate(user => {
        return encrypt(user.contraseña)
        .then(success => {
            user.contraseña = success
        })
        .catch(err => {
            if (err) {
                return res.status(400).json(err)
            }
        })
    })
    /*
    User.associate = function (models) {
        models.Usuario.hasMany(models.Accesos, { as: 'accesos' } )
    }

    User.associate = function (models) {
        models.Usuario.hasMany(models.Alerta, { as: 'alertas' } )
    }*/

    return User
}