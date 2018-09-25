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
import armController from '../controllers/arm'
import clothesController from '../controllers/clothes'
import evidencePortraitController from '../controllers/evidencePortrait'
import evidenceArmController from '../controllers/evidenceArm'
import evidenceClothesController from '../controllers/evidenceClothes'
import pictureController from '../controllers/picture'
import tokenController from '../controllers/token'

// search controller
import portraitSearch from '../query/portrait'
import armSearch from '../query/arm'
import clothesSearch from '../query/clothes'


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

api.get('/arms', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), armController.index)
api.get('/arms/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), armController.show)
api.post('/arms', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), armController.store)
api.put('/arms/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), armController.update)

api.get('/clothes', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), clothesController.index)
api.get('/clothes/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), clothesController.show)
api.post('/clothes', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), clothesController.store)
api.put('/clothes/:id', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), clothesController.update)

api.get('/evidences/:id/portraits', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), evidencePortraitController.index)
api.get('/evidences/:id/arms', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), evidenceArmController.index)
api.get('/evidences/:id/clothes', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), evidenceClothesController.index)

api.post('/pictures', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS', 'OPERADOR_BALISTICA', 'OPERADOR_LABORATORIO']), file.single('file'), pictureController.store)

api.get('/chronologies', isAuth, chronologyController.index)

// search
api.post('/search/portraits', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_HECHOS']), portraitSearch.index)
api.post('/search/arms', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_BALISTICA']), armSearch.index)
api.post('/search/clothes', isAuth, rol(['ADMINISTRADOR', 'OPERADOR_LABORATORIO']), clothesSearch.index)


api.post('/signin', authController.signIn)

module.exports = api
