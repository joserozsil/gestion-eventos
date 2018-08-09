'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chronology = require('../models/chronology');

var _chronology2 = _interopRequireDefault(_chronology);

var _response = require('../services/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var operations = {
    index: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _chronology2.default.find({ deletedAt: null }).exec(function (err, list) {
                                if (err) {
                                    return res.status(500).send(_response2.default.handleFatalError(500, err.message));
                                } else {
                                    return res.status(200).send(_response2.default.showAll(200, list));
                                }
                            });

                        case 3:
                            _context.next = 8;
                            break;

                        case 5:
                            _context.prev = 5;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', next(_context.t0));

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 5]]);
        }));

        function index(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return index;
    }(),
    show: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _chronology2.default.find({ _id: req.params.id, deletedAt: null }).exec(function (err, list) {
                                if (err) {
                                    return res.status(500).send(_response2.default.handleFatalError(500, err.message));
                                } else {
                                    return res.status(200).send(_response2.default.showAll(200, list));
                                }
                            });

                        case 3:
                            _context2.next = 8;
                            break;

                        case 5:
                            _context2.prev = 5;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', next(_context2.t0));

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 5]]);
        }));

        function show(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return show;
    }(),
    store: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var chronology;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            chronology = new _chronology2.default(req.body);

                            chronology.save(function (err, save) {
                                if (err) {
                                    return res.status(500).send(_response2.default.handleFatalError(500, err.message));
                                } else {
                                    return res.status(201).send(_response2.default.showAll(201, save));
                                }
                            });
                            _context3.next = 8;
                            break;

                        case 5:
                            _context3.prev = 5;
                            _context3.t0 = _context3['catch'](0);
                            return _context3.abrupt('return', next(_context3.t0));

                        case 8:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 5]]);
        }));

        function store(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return store;
    }(),
    update: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            var toUpdate;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            toUpdate = req.body;

                            Object.assign(toUpdate, { updatedAt: Date.now() });

                            _context4.next = 5;
                            return _chronology2.default.findByIdAndUpdate(req.params.id, toUpdate, { new: true }, function (err, updated) {
                                if (err) {
                                    return res.status(500).send(_response2.default.handleFatalError(500, err.message));
                                } else {
                                    return res.status(200).send(_response2.default.showAll(200, updated));
                                }
                            });

                        case 5:
                            _context4.next = 10;
                            break;

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4['catch'](0);
                            return _context4.abrupt('return', next(_context4.t0));

                        case 10:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 7]]);
        }));

        function update(_x7, _x8) {
            return _ref4.apply(this, arguments);
        }

        return update;
    }(),
    delete: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _chronology2.default.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() }, { new: true }, function (err, updated) {
                                if (err) {
                                    return res.status(500).send(_response2.default.handleFatalError(500, err.message));
                                } else {
                                    return res.status(200).send(_response2.default.showAll(200, updated));
                                }
                            });

                        case 3:
                            _context5.next = 8;
                            break;

                        case 5:
                            _context5.prev = 5;
                            _context5.t0 = _context5['catch'](0);
                            return _context5.abrupt('return', next(_context5.t0));

                        case 8:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 5]]);
        }));

        function _delete(_x9, _x10) {
            return _ref5.apply(this, arguments);
        }

        return _delete;
    }()
};

exports.default = operations;