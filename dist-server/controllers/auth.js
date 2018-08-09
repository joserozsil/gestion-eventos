'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jwt = require('../services/jwt');

var _password = require('../services/password');

var _response = require('../services/response');

var _response2 = _interopRequireDefault(_response);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var operations = {
    signIn: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _user2.default.find({ idCard: req.body.idCard }).then(function (user) {
                                if (!user || user == null || user == undefined || !user.length) {
                                    return res.status(403).json(_response2.default.handleError(403, {}, "El usuario no coincide con nuestros registros"));
                                } else {
                                    var compared = (0, _password.compare)(req.body.password, user[0].password).then(function (value) {
                                        if (value) {
                                            return res.status(200).json(_response2.default.showOne(200, { token: (0, _jwt.createToken)(user), user: user[0] }, "Usuario logeado correctamente"));
                                        } else {
                                            return res.status(403).json(_response2.default.handleError(403, {}, "La contraseña no coincide con nuestros registros"));
                                        }
                                    }).catch(function (error) {
                                        return res.status(400).json(_response2.default.handleError(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error));
                                    });
                                }
                            }).catch(function (error) {
                                return res.status(400).json(_response2.default.handleError(400, "¡Algo ha salido mal, por favor intentelo nuevamente!", error));
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function signIn(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return signIn;
    }()
};

exports.default = operations;