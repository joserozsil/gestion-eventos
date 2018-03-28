'use strict'

import express from 'express'
import userController from '../controllers/user'

const api = express.Router()

api.get('/list', userController.show);

module.exports = api