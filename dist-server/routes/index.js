'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _auth = require('../controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

var _chronology = require('../controllers/chronology');

var _chronology2 = _interopRequireDefault(_chronology);

var _rol = require('../controllers/rol');

var _rol2 = _interopRequireDefault(_rol);

var _authenticated = require('../middlewares/authenticated');

var _authenticated2 = _interopRequireDefault(_authenticated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _express2.default.Router();

// middlewares


// controladores


api.get('/users', _authenticated2.default, _user2.default.index);
api.get('/users/:id', _authenticated2.default, _user2.default.show);
api.post('/users', _user2.default.store);
api.put('/users/:id', _authenticated2.default, _user2.default.update);
api.delete('/users/:id', _authenticated2.default, _user2.default.delete);

api.get('/chronologies', _authenticated2.default, _chronology2.default.index);
api.get('/chronologies/:id', _authenticated2.default, _chronology2.default.show);
api.post('/chronologies', _authenticated2.default, _chronology2.default.store);
api.put('/chronologies/:id', _authenticated2.default, _chronology2.default.update);
api.delete('/chronologies/:id', _authenticated2.default, _chronology2.default.delete);

api.get('/rols', _authenticated2.default, _rol2.default.index);
api.get('/rols/:id', _authenticated2.default, _rol2.default.show);
api.post('/rols', _rol2.default.store);
api.put('/rols/:id', _authenticated2.default, _rol2.default.update);
api.delete('/rols/:id', _authenticated2.default, _rol2.default.delete);

api.post('/signin', _auth2.default.signIn);

module.exports = api;