'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import accessController from '../controllers/access'
import alertController from '../controllers/alert'
import evidenceController from '../controllers/evidence'
import chronologyController from '../controllers/chronology'

import authController from '../controllers/auth'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', userController.index)
api.get('/users/:id', userController.show)
api.post('/users', userController.store)
api.put('/users/:id', userController.update)
api.delete('/users/:id', userController.delete)

api.get('/access', accessController.index)
api.post('/access', accessController.store)

api.get('/alerts', alertController.index)
api.post('/alerts', alertController.store)

api.get('/evidences', evidenceController.index)
api.get('/evidences/:id', evidenceController.show)
api.post('/evidences', evidenceController.store)
api.put('/evidences/:id', evidenceController.update)
api.delete('/evidences/:id', evidenceController.delete)

api.get('/chronologies', chronologyController.index)

api.post('/signin', authController.signIn)

module.exports = api