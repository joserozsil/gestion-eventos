'user strict'

function response(status = null, data = null, userMessage = null, devMessage = null) {
    return response = {
        "meta": {
            "status": status,
            "userMessage": userMessage,
            "devMessage": devMessage
        },
        "data": data
    }
}

module.exports = {
    response
}