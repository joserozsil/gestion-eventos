import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import Sequelize from 'sequelize'
import settings from '../config/db.json'

const env = process.env.NODE_ENV || 'development'
const basename = path.basename(module.filename)
let sequelize
const db = {}

try {
    sequelize = new Sequelize(
        settings[env].database, settings[env].username, settings[env].password, settings[env]
    )
    console.log(chalk.blue(`Conectado a la base de datos: ${ settings[env].database }`))
} catch (e) {
    console.log(chalk.red(`Ha ocurrido un error ${ e }`))
}

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db