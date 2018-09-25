'use strict'

import Model from '../models'
import _ from 'underscore'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const operations = {
    index: (req, res, next) => {
      try {

        const query = []
 
        // req.body.exp
        if (req.body.quering) {
          query.push({ exp: { [Op.like]: `%${ req.body.quering }%` } })
          query.push({ clise: { [Op.like]: `%${ req.body.quering }%` } }) 
        } else {
          return res.status(400).json({
            message: 'el campo quering es requerido'
          })
        }

        Model.Ropa.findAndCountAll({
            include: [
                {
                model: Model.Evidencia,
                include: [{
                    model: Model.Imagen
                }]
            }],
            where: {
              [Op.or]: query
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
          console.log(error)
            return res.status(400).json(error)
        })
      } catch( e ) {
        return next(e)
      }
    }
}

export default operations