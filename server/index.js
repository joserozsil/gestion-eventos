'use strict'

const app = require('./app')
const chalk = require('chalk')
const config = require('./config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.SETTINGS.DB_NAME, config.SETTINGS.DB_USER, config.SETTINGS.DB_PASSWORD, {
    host: config.SETTINGS.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log(chalk.green(`La conexión ha sido establecida exitosamente`))
        console.log(chalk.green(`Base de datos: ${ config.SETTINGS.DB_HOST}/${config.SETTINGS.DB_NAME}, Usuario: ${ config.SETTINGS.DB_USER }`))
        app.listen(config.SETTINGS.APP_PORT, () => {
            console.log(chalk.yellow(`Servidor Node y Express está corriendo en el puerto ${ config.SETTINGS.APP_PORT } `))
        })
    })
    .catch(err => {
        console.log(chalk.red(err))
    });