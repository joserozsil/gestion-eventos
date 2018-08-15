'use strict'

import app from './app'
import chalk from 'chalk'
import mongoose from 'mongoose'
import { settings } from './config'

mongoose.Promise = global.Promise

mongoose.connect(settings.MONGO_DB || `mongodb://localhost:27017/${settings.DB_NAME}`)
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(chalk.cyan(`Servidor Node y Express corriendo en el puerto ${ settings.APP_PORT } `))
        console.log(chalk.cyan(`Mongo DB mongodb://localhost:27017/${settings.DB_NAME}`))
    })
})

.catch((err) => console.log(chalk.red(`Error al conectar: ${err}`)))


