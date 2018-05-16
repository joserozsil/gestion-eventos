'use strict'

import app from './app'
import chalk from 'chalk'
import models from './models'
import mongoose from 'mongoose'
import { settings } from './config'

mongoose.Promise = global.Promise

models.sequelize.sync()
.then(() => {
    mongoose.connect(settings.MONGO_DB || 'mongodb://localhost:27017/news')
    .then(() => {
        app.listen(settings.APP_PORT, () => {
            console.log(chalk.blue(`Servidor Node y Express corriendo en el puerto ${ settings.APP_PORT } `))
            console.log(chalk.blue(`Mongo DB mongodb://localhost:27017/news`))
        })
    })
    .catch((err) => console.log(err))
})


