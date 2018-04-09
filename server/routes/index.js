'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import authController from '../controllers/auth'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', isAuth, userController.index)
api.get('/users/:idCard', isAuth, userController.show)
api.post('/users',isAuth, isAuth, userController.store)
api.put('/users/:idCard', isAuth, userController.update)
api.delete('/users/:idCard', isAuth, userController.delete)

api.post('/signin', authController.signIn)

module.exports = api