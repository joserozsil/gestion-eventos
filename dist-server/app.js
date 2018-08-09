'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _response = require('./services/response');

var _response2 = _interopRequireDefault(_response);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

console.log(_path2.default.join(__dirname, '../src2/dist'));

app.use('/', _express2.default.static(_path2.default.join(__dirname, '../src2/dist')));

app.use(function (req, res, next) {
  console.log('Request endpoint: ' + _chalk2.default.yellow(req.originalUrl) + ' method ' + req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(function (err, req, res, next) {
  console.log(_chalk2.default.red(err));
  res.json(_response2.default.handleFatalError(500, err.message));
});

module.exports = app;