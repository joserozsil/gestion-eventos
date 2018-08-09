'use strict';

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

var _randToken = require('rand-token');

var _randToken2 = _interopRequireDefault(_randToken);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createToken = function (user) {
    var payload = {
        sub: user.idCard,
        iat: (0, _moment2.default)().unix,
        exp: (0, _moment2.default)().add(8, 'hours').unix()
    };
    return _jwtSimple2.default.encode(payload, _config.settings.SECRET);
};

exports.decodeToken = function (token) {
    var decode = new Promise(function (resolve, reject) {
        try {
            var payload = _jwtSimple2.default.decode(token, _config.settings.SECRET);

            if (payload.exp < (0, _moment2.default)().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                });
            }

            resolve(payload.sub);
        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            });
        }
    });

    return decode;
};

exports.createRefreshToken = function (payload) {
    return _randToken2.default.uid(256);
};