'use strict'

import express from 'express'
import bodyParser from 'body-parser'

let app = express()

// middlewares e body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// configurar rutas
import routes from './routes'

// congigurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
})

// ruta api api base
app.use('/api', routes)

module.exports = app