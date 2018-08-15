'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import routes from './routes'

const app = express()

import path from 'path'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(path.join(__dirname, '../src2/dist'))

app.use('/', express.static(path.join(__dirname, '../src2/dist')))

app.use((req, res, next) => {
	console.log(`Request endpoint: ${ chalk.yellow(req.originalUrl) } method ${ req.method }`)
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }
  next()
})

app.use('/api/v1', routes)

app.use((err, req, res, next) => {
	console.log(chalk.red(err))
	res.json({ message: err.message })
})

module.exports = app