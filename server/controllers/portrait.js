'use strict'

import Model from '../models'
import _ from 'underscore'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const operations = {
    index: (req, res, next) => {
      try {
        Model.Evidencia.findAndCountAll({
            where: {
                f_eliminacion: null,
                retrato_id: {
                    [Op.ne]: null
                }
            },
            order: [[ 'f_creacion', 'DESC' ]],
            offset: req.query.offset || 0,
            limit: req.query.limit || 15
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
                message: "Por favor indique el id del retrato"
            })
        }

        Model.Evidencia.findOne({
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
            Model.Retrato.create(req.body)
            .then(result => {
                return res.status(200).json(result)
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