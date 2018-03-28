'use strict'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        cedula: DataTypes.STRING,
        nombre: DataTypes.STRING
    })
    return User
}