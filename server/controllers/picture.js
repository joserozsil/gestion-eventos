'use strict'

import Model from '../models'
import _ from 'underscore'

const operations = {
    store: (req, res, next) => {
        try {

          if(!req.body.evidencia_id) {
            return res.status(400).json({
              message: 'Por favor ingrese el número de evidencia asociado'
            })
          }

          if(!req.body.usuario_id) {
            return res.status(400).json({
              message: 'Por favor ingrese el id del usuario'
            })
          }

          Model.Imagen.create({
            localizacion: req.file.destination,
            nombre_archivo: req.file.filename,
            extension: req.file.mimetype.split('/')[1],
            descripcion: `Tamaño de archivo: ${req.file.size}`,
            evidencia_id: req.body.evidencia_id,
            usuario_id: req.body.usuario_id
          })
          .then(result => {
            return res.status(200).json({
              localizacion: req.file.destination,
              nombre_archivo: req.file.filename,
              extension: req.file.mimetype.split('/')[1],
              descripcion: `Tamaño de archivo: ${req.file.size}`
            })
          })
          .catch(error => {
            console.log(error)
            return res.status(400).json(error)
          })

        } catch (e) {
          console.log(e)
            return next(e)
        }
    }
}

export default operations