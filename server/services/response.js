'user strict'

function showOne (status = 200, data = {}, userMessage = "", devMessage = "") {
	return showMessage(status, data, userMessage, devMessage)
}

function showAll (status = 200, data = [], userMessage = "", devMessage = "") {
	return showMessage(status, data)
}

function handleFatalError (status = 500, devMessage = "") {
	return showMessage(status, [], "Algo ha salido mal, por favor intentelo nuevamente más tarde", devMessage)
}

function handleError (status = 500, userMessage = "", devMessage = "") {
	return showMessage(status, [], userMessage, devMessage)
}

function showMessage(status = 200, data = [], userMessage = "", devMessage = "") {
	return {
		"meta": {
			status,
			devMessage,
			userMessage
		},
		data
	} 
}

export default {
	showOne,
	showAll,
	handleError,
	handleFatalError
}
