'use strict'

import express from 'express'

// controladores
import userController from '../controllers/user'

const api = express.Router()

api.get('/users', userController.index);

module.exports = api