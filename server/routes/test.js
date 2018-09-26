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
import { rol } from '../middlewares/authorize'
import file from '../middlewares/file'

const isAuth = (req, res, next) => {
  next()
}

const api = express.Router()

api.get('/users', isAuth, userController.index)
api.get('/users/:id', isAuth, userController.show)
api.post('/users', isAuth, userController.store)
api.put('/users/:id', isAuth, userController.update)
api.delete('/users/:id', isAuth, userController.delete)

api.post('/token', isAuth, tokenController.index)

api.get('/access', isAuth, accessController.index)

api.get('/alerts', isAuth, alertController.index)
api.post('/alerts', alertController.store)

api.get('/history', isAuth, historyController.index)

api.get('/evidences', isAuth, evidenceController.index)
api.get('/evidences/:id', isAuth, evidenceController.show)
api.post('/evidences', isAuth, evidenceController.store)
api.put('/evidences/:id', isAuth, evidenceController.update)
api.delete('/evidences/:id', isAuth, evidenceController.delete)

api.get('/portraits', isAuth, portraitController.index)
api.get('/portraits/:id', isAuth, portraitController.show)
api.post('/portraits', isAuth, portraitController.store)
api.put('/portraits/:id', isAuth, portraitController.update)

api.get('/arms', isAuth, armController.index)
api.get('/arms/:id', isAuth, armController.show)
api.post('/arms', isAuth, armController.store)
api.put('/arms/:id', isAuth, armController.update)

api.get('/clothes', isAuth, clothesController.index)
api.get('/clothes/:id', isAuth, clothesController.show)
api.post('/clothes', isAuth, clothesController.store)
api.put('/clothes/:id', isAuth, clothesController.update)

api.get('/evidences/:id/portraits', isAuth, evidencePortraitController.index)
api.get('/evidences/:id/arms', isAuth, evidenceArmController.index)
api.get('/evidences/:id/clothes', isAuth, evidenceClothesController.index)

api.post('/pictures', isAuth, file.single('file'), pictureController.store)

api.get('/chronologies', isAuth, chronologyController.index)

// search
api.post('/search/portraits', isAuth, portraitSearch.index)
api.post('/search/arms', isAuth, armSearch.index)
api.post('/search/clothes', isAuth, clothesSearch.index)


api.post('/signin', authController.signIn)

module.exports = api
