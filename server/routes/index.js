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
import evidencePortraitController from '../controllers/evidencePortrait'
import pictureController from '../controllers/picture'
import tokenController from '../controllers/token'

import authController from '../controllers/auth'

// middlewares
import isAuth from '../middlewares/authenticated'
import { rol } from '../middlewares/authorize'
import file from '../middlewares/file'

const api = express.Router()

api.get('/users', isAuth, userController.index)
api.get('/users/:id', isAuth, rol(['ADMINISTRADOR']), userController.show)
api.post('/users', isAuth, rol(['ADMINISTRADOR']), userController.store)
api.put('/users/:id', isAuth, rol(['ADMINISTRADOR']), userController.update)
api.delete('/users/:id', isAuth, rol(['ADMINISTRADOR']), userController.delete)

api.post('/token', isAuth, tokenController.index)

api.get('/access', isAuth, rol(['ADMINISTRADOR']), accessController.index)

api.get('/alerts', isAuth, rol(['ADMINISTRADOR']), alertController.index)
api.post('/alerts', alertController.store)

api.get('/history', isAuth, rol(['ADMINISTRADOR']), historyController.index)

api.get('/evidences', isAuth, evidenceController.index)
api.get('/evidences/:id', isAuth, evidenceController.show)
api.post('/evidences', isAuth, evidenceController.store)
api.put('/evidences/:id', isAuth, evidenceController.update)
api.delete('/evidences/:id', isAuth, rol(['ADMINISTRADOR']), evidenceController.delete)

api.get('/portraits', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), portraitController.index)
api.get('/portraits/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), portraitController.show)
api.post('/portraits', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), portraitController.store)
api.put('/portraits/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), portraitController.update)

api.get('/evidences/:id/portraits', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), evidencePortraitController.index)

api.post('/pictures', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS', 'OPERADOR_BALISTICA', 'OPERADOR_LABORATORIO']), file.single('file'), pictureController.store)

api.get('/chronologies', isAuth, chronologyController.index)

api.post('/signin', authController.signIn)

module.exports = api
