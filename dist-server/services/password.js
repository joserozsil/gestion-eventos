'use strict';
'use stric';

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.encrypt = function (plainPassword) {
    return new Promise(function (resolve, reject) {
        try {
            _bcrypt2.default.genSalt(10, function (err, salt) {
                _bcrypt2.default.hash(plainPassword, salt, function (err, hash) {
                    resolve(hash);
                });
            });
        } catch (err) {
            reject({
                status: 500,
                message: 'No se ha podido encriptar',
                err: err
            });
        }
    });
};

exports.compare = function (plainPassword, hash) {
    return new Promise(function (resolve, reject) {
        try {
            _bcrypt2.default.compare(plainPassword, hash).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject({
                    status: 500,
                    message: 'No se ha podido comparar',
                    error: err
                });
            });
        } catch (err) {
            console.log(err);
        }
    });
};