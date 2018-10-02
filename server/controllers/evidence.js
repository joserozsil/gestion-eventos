'use strict'

import Sequelize from 'sequelize'
import Model from '../models'
import _ from 'underscore'
import moment  from 'moment';
const Op = Sequelize.Op

const operations = {
    index: (req, res, next) => {
        try {
            const finding = {
                f_eliminacion: null,
                departamento: {
                    [Op.ne]: 'RECEPCION'
                }
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
                attributes: ['id', 'departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'f_creacion', 'usuario_id', 'estado'],
                include: [{
                    model: Model.Usuario
                }],
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
                console.log(error)
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
                    message: "Por favor indique el id del usuario"
                })
            }

            Model.Evidencia.findOne({
                attributes: ['id', 'departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'f_creacion', 'estado'],
                include: [{
                    model: Model.Usuario
                }],
                where: {
                    id: req.params.id,
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
            Object.assign(req.body, { usuario_id: req.user.id })


            Model.Evidencia.create(_.pick(req.body, ['departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'usuario_id']))
            .then(result => {

                Model.Historial.create({
                    usuario_id: req.user.id,
                    descripcion: `Ha registrado la evidencia ${ result.id }`
                })
                .then(str => {
                    return res.status(200).json(result)
                })
                .catch(e => {
                    console.log(e)
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
    update: (req, res, next) => {
        try {

            if(!req.params.id) {
                return res.status(400).json({
                    message: "Por favor indique el id de la evidencia"
                })
            }

            Model.Evidencia.findById(req.params.id)
            .then(usuario => {
                let update = _.pick(req.body, ['departamento', 'nombre', 'descripcion', 'tipo_recepcion', 'observacion', 'tipo_experticia', 'retrato_id', 'estado'])
                Object.assign(update, { f_actualizacion: Date.now() })
                usuario.update(update)
                .then(result => {
                    Model.Historial.create({
                        usuario_id: req.user.id,
                        descripcion: `Ha actualizado la evidencia ${ result.id }`
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
    delete: (req, res, next) => {
        try {

            if(!req.params.id) {
                return res.status(400).json({
                    message: "Por favor indique el id del usuario"
                })
            }

            Model.Evidencia.findById(req.params.id)
            .then(usuario => {
                usuario.update({
                    f_eliminacion: Date.now()
                })
                .then(result => {
                    Model.Historial.create({
                        usuario_id: req.user.id,
                        descripcion: `Ha eliminado la evidencia ${ result.id }`
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
    }
}

export default operations