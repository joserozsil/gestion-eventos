'use strict'

import app from './app'

import Models from './models'

import chalk from 'chalk'
import { settings } from './config'

// sync database
Models.sequelize.sync().then((message) =>{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Modo: ${process.env.NODE_ENV}`)
        console.log(chalk.cyan(`Servidor Node y Express corriendo en el puerto ${ settings.PORT || 3000 } `))
    })
}).catch((err) =>{
    console.log(err,"Something went wrong with the Database Update!")
})




