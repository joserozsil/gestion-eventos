'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

/*
mongoose.connect(settings.MONGO_DB || `mongodb://localhost:27017/${settings.DB_NAME}`)
.then(() => {
    app.listen(settings.APP_PORT, () => {
        console.log(chalk.cyan(`Servidor Node y Express corriendo en el puerto ${ settings.APP_PORT } `))
        console.log(chalk.cyan(`Mongo DB mongodb://localhost:27017/${settings.DB_NAME}`))
    })
})*/

_app2.default.listen(3000, function () {
    console.log(_chalk2.default.cyan('Servidor Node y Express corriendo en el puerto 80 '));
});

/*
.catch((err) => console.log(chalk.red(`Error al conectar: ${err}`)))*/