'use strict'

const express = require('express')

const api = express.Router()

const userController = require('../controllers').user;

api.get('', userController.list);

module.exports = api