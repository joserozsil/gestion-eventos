'user strict'
import { settings } from "../config"

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

function error(status = null, userMessage = null, devMessage = null) {
    
    return response = {
        "meta": {
            "status": status,
            "userMessage": { message: userMessage, details: { name: devMessage.name, more: devMessage.errors } },
            "devMessage": settings.PROD_MODE == false ? devMessage : devMessage.name
        },
        "data": {}
    }
}

module.exports = {
    response,
    error
}