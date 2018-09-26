'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import routes from './routes'
import path from 'path'

import volleyball from 'volleyball'
import rateLimit from 'express-rate-limit'
import apicache from 'apicache'
import helmet from 'helmet'


const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120,
  message: "Número máximo de peticiones realizadas"
})

const cache = apicache.middleware

const app = express()

app.use(helmet())

app.use(volleyball)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use((req, res, next) => {
  
	console.log(`Request endpoint: ${ chalk.yellow(req.originalUrl) } method ${ req.method }`)
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Mashape-Authorization, Cache-Control"
  )

  res.header(
    "Access-Control-Request-Headers", "authorization,cache-control,x-requested-with"
  )

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }

  next()
})

//app.use('/api/v1', apiLimiter, cache('5 minutes'), routes)
app.use('/api/v1', apiLimiter, routes)

app.use((err, req, res, next) => {
	console.log(chalk.red(err))
	return res.status(500).json(err)
})

module.exports = app