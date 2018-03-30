'use strict'

import Sequelize from 'Sequelize'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        idCard: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: "Ciudad Guayana"
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: Sequelize.DATE,
        deleteAt: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: null
        }
    })
    return User
}