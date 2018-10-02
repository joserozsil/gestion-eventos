'use strict'

import Sequelize from 'sequelize'
import Model from '../models'
import _ from 'underscore'
const Op = Sequelize.Op
import moment from 'moment'

const operations = {
    index: (req, res, next) => {
        try {
            let finding = {
                f_eliminacion: null,
                departamento: 'RECEPCION'
            }

            let fechaCreacion = {}

            if (req.query.DATE_MIN != undefined && req.query.DATE_MIN) {
                Object.assign(fechaCreacion, {
                    [Op.gt]: moment(req.query.DATE_MIN, 'YYYY-MM-DD').toDate(),
                })
            }

            if (req.query.DATE_MAX != undefined && req.query.DATE_MAX) {
                Object.assign(fechaCreacion, {
                    [Op.lt]: moment(req.query.DATE_MAX, 'YYYY-MM-DD').add(1, 'day').toDate(),
                })
            }

            if (req.query.DATE_MIN && req.query.DATE_MAX) {
                Object.assign(finding, { f_creacion: fechaCreacion })
            }

            Model.Evidencia.findAndCountAll({
                attributes: ['id', 'departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'f_creacion'],
                include: [
                    {
                        model: Model.Usuario
                    },
                    {
                        model: Model.Retrato
                    }
                ],
                where: finding,
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
    }
}

export default operations