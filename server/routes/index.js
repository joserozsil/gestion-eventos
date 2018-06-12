'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import authController from '../controllers/auth'
import chronologyController from '../controllers/chronology'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', isAuth, userController.index)
api.get('/users/:id', isAuth, userController.show)
api.post('/users', userController.store)
api.put('/users/:id', isAuth, userController.update)
api.delete('/users/:id', isAuth, userController.delete)

api.get('/chronologies', isAuth, chronologyController.index)
api.get('/chronologies/:id', isAuth, chronologyController.show)
api.post('/chronologies', isAuth, chronologyController.store)
api.put('/chronologies/:id', isAuth, chronologyController.update)
api.delete('/chronologies/:id', isAuth, chronologyController.delete)

api.post('/signin', authController.signIn)

module.exports = api