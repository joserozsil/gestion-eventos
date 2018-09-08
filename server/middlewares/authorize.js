'use strict'

function rol (roles = []) {
	return function (req, res, next) {

        if(!roles.length) {
            next()
        }

        const rol = roles.filter(data => data == req.user.rol)

        if(rol.length) {
        	next()
        } else {
    		return res.status(403).json({
	    		message: 'Acceso denegado'
	   		})
        }
    }
}

export {
	rol
}
