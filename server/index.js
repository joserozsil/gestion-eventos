'use strict'

import app from './app'
import chalk from 'chalk'
import models from './models'
import { settings } from './config'

models.sequelize.sync().then(function() {
    app.listen(settings.APP_PORT, () => {
        console.log(chalk.blue(`Servidor Node y Express está corriendo en el puerto ${ settings.APP_PORT } `))
    })
})