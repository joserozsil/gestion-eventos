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
api.get('/users/:idCard', isAuth, userController.show)
api.post('/users', isAuth, userController.store)
api.put('/users/:idCard', isAuth, userController.update)
api.delete('/users/:idCard', isAuth, userController.delete)

api.get('/chronologies', isAuth, chronologyController.index)
api.get('/chronologies/:idChronology', isAuth, chronologyController.show)
api.post('/chronologies', isAuth, chronologyController.store)
api.put('/chronologies/:idChronology', isAuth, chronologyController.update)
api.delete('/chronologies/:idChronology', isAuth, chronologyController.delete)

api.post('/signin', authController.signIn)

module.exports = api