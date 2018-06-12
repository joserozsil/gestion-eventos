'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import authController from '../controllers/auth'
import chronologyController from '../controllers/chronology'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', userController.index)
api.get('/users/:id', userController.show)
api.post('/users', userController.store)
api.put('/users/:id', userController.update)
api.delete('/users/:id', userController.delete)

api.get('/chronologies', chronologyController.index)
api.get('/chronologies/:id', chronologyController.show)
api.post('/chronologies', chronologyController.store)
api.put('/chronologies/:id', chronologyController.update)
api.delete('/chronologies/:id', chronologyController.delete)

api.post('/signin', authController.signIn)

module.exports = api