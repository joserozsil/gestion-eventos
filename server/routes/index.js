'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import authController from '../controllers/auth'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', userController.index)
api.get('/users/:idCard', userController.show)
api.post('/users', userController.store)
api.put('/users/:idCard', userController.update)
api.delete('/users/:idCard', userController.delete)

api.post('/signin', authController.signIn)

module.exports = api