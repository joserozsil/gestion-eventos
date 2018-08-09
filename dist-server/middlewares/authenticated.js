'use strict';

var _jwt = require('../services/jwt');

var _response = require('../services/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send(_response2.default.handleError(403, {}, "Usuario no autenticado"));
    }

    var token = req.headers.authorization;

    var decode = (0, _jwt.decodeToken)(token).then(function (response) {
        req.userToken = response;
        next();
    }).catch(function (error) {
        return res.status(error.status).send(_response2.default.handleError(error.status, {}, "Token no valido", error));
    });
}

module.exports = isAuth;