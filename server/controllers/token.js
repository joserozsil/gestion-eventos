'use strict'

import _ from 'underscore'
import { decodeToken } from '../services/jwt'

const operations = {
    index: (req, res, next) => {
        try {

            if(!req.body.token) {
                return res.status(400).json({
                    message: "El token es requerido"
                })
            }

            decodeToken(req.body.token)
            .then(resp => {
                return res.status(200).json(_.pick(resp, ['nombre', 'apellido', 'rol']))
            })
            .catch(error => {
                return res.status(400).json(error)
            })

           
		} catch( e ) {
			return next(e)
		}
    }
}

export default operations