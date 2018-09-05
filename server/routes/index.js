'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'
import accessController from '../controllers/access'
import alertController from '../controllers/alert'
import evidenceController from '../controllers/evidence'
import chronologyController from '../controllers/chronology'
import historyController from '../controllers/history'
import portraitController from '../controllers/portrait'

import authController from '../controllers/auth'

// middlewares
import isAuth from '../middlewares/authenticated'

const api = express.Router()

api.get('/users', isAuth, userController.index)
api.get('/users/:id', isAuth, userController.show)
api.post('/users', userController.store)
api.put('/users/:id', isAuth, userController.update)
api.delete('/users/:id', isAuth, userController.delete)

api.get('/access', isAuth, accessController.index)
api.post('/access', isAuth, accessController.store)

api.get('/alerts', isAuth, alertController.index)
api.post('/alerts', alertController.store)

api.get('/history', isAuth, historyController.index)
api.post('/history', historyController.store)

api.get('/evidences', isAuth, evidenceController.index)
api.get('/evidences/:id', isAuth, evidenceController.show)
api.post('/evidences', isAuth, evidenceController.store)
api.put('/evidences/:id', isAuth, evidenceController.update)
api.delete('/evidences/:id', isAuth, evidenceController.delete)

api.get('/portraits', isAuth, portraitController.index)
api.post('/portraits', isAuth, portraitController.store)

api.get('/chronologies', isAuth, chronologyController.index)

api.post('/signin', authController.signIn)

module.exports = api