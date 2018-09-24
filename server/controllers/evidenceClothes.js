'use strict'

import Model from '../models'

const operations = {
    index: (req, res, next) => {
      try {

        if(!req.params.id) {
            return res.status(400).json({
                message: "Por favor indique el id de la evidencia"
            })
        }

        Model.Ropa.findOne({
            include: [{
                model: Model.Evidencia,
                include:[{
                    model: Model.Imagen
                }]
            }],
            where: {
                evidencia_id: req.params.id,
                f_eliminacion: null
            }
        })
        .then(result => {
            if(!result) {
                return res.status(200).json({
                    data: {}
                })
            }

            return res.status(200).json({
                data: result
            })
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