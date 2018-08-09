"use strict";
'user strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function showOne() {
	var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var userMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	var devMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

	return showMessage(status, data, userMessage, devMessage);
}

function showAll() {
	var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var userMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	var devMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

	return showMessage(status, data);
}

function handleFatalError() {
	var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
	var devMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

	return showMessage(status, [], "Algo ha salido mal, por favor intentelo nuevamente más tarde", devMessage);
}

function handleError() {
	var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
	var userMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	var devMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	return showMessage(status, [], userMessage, devMessage);
}

function showMessage() {
	var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var userMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	var devMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

	return {
		"meta": {
			status: status,
			devMessage: devMessage,
			userMessage: userMessage
		},
		data: data
	};
}

exports.default = {
	showOne: showOne,
	showAll: showAll,
	handleError: handleError,
	handleFatalError: handleFatalError
};