'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RolSchema = _mongoose2.default.Schema({
    name: String,
    permissions: [{
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'permissions'
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date,
    deletedAt: Date
});

module.exports = _mongoose2.default.model('rols', RolSchema);