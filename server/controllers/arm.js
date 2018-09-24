'use strict'

import Model from '../models'
import _ from 'underscore'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const operations = {
    index: (req, res, next) => {
      try {
        Model.Arma.findAndCountAll({
            include: [
                {model: Model.Evidencia,
                include: [{
                    model: Model.Imagen
                }]
            }],
            where: {
                f_eliminacion: null
            },
            order: [[ 'f_creacion', 'DESC' ]],
            offset: Number(req.query.offset) || 0,
            limit: Number(req.query.limit) || 15
        })
        .then(result => {
            return res.status(200).json({
                data: result.rows,
                total: result.count,
                offset: req.query.offset || 0,
                limit: req.query.limit || 15
            })
        })
        .catch(error => {
            return res.status(400).json(error)
        })
      } catch( e ) {
        return next(e)
      }
    },
    show: (req, res, next) => {
      try {

        if(!req.params.id) {
            return res.status(400).json({
                message: "Por favor indique el id del arma"
            })
        }

        Model.Arma.findOne({
            include: [{
                model: Model.Evidencia
            }],
            where: {
                f_eliminacion: null
            }
        })
        .then(result => {
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
    },
    store: (req, res, next) => {
        try {
            Model.Arma.create(req.body)
            .then(result => {
                Model.Historial.create({
                    usuario_id: req.user.id,
                    descripcion: `Ha registrado el arma ${ result.id }`
                })
                .then(str => {
                    return res.status(200).json(result)
                })
                .catch(e => {
                    console.log(e)
                })
            })
            .catch(error => {
                return res.status(400).json(error)
            })
        } catch( e ) {
            return next(e)
        }
    },
    update: (req, res, next) => {
        try {

            if(!req.params.id) {
                return res.status(400).json({
                    message: "Por favor indique el id de la arma"
                })
            }

            Model.Arma.findById(req.params.id)
            .then(usuario => {
                let update = req.body
                Object.assign(update, { f_actualizacion: Date.now() })
                usuario.update(update)
                .then(result => {
                    Model.Historial.create({
                        usuario_id: req.user.id,
                        descripcion: `Ha actualizado el arma ${ result.id }`
                    })
                    .then(str => {
                        return res.status(200).json({
                            data: result
                        })
                    })
                    .catch(e => {
                        console.log(e)
                    })
                })
                .catch(error => {
                    return res.status(400).json(error)
                })
            })
        } catch( e ) {
            return next(e)
        }
    },
}

export default operations