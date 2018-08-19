'use strict'

import Model from '../models'
import _ from 'underscore'

const operations = {
    index: (req, res, next) => {
      try {
          Model.Alerta.findAndCountAll({
              attributes: ['id','ip', 'usuario', 'f_creacion' ],
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
              console.log(error)
            return res.status(400).json(error)
          })
      } catch( e ) {
        return next(e)
      }
    },
    store: (req, res, next) => {
      try {
          Model.Alerta.create(_.pick(req.body, ['ip', 'usuario']))
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