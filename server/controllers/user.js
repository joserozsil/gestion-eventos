'use strict'

import Model from '../models'
import _ from 'underscore'
import { encrypt } from '../services/password'

const operations = {
    index: (req, res, next) => {
        try {
            Model.Usuario.findAndCountAll({
                attributes: ['id', 'usuario', 'nombre', 'apellido', 'direccion', 'telefono', 'telefono_casa', 'rol', 'cedula', 'f_creacion'],
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
                    message: "Por favor indique el id del usuario"
                })
            }

            Model.Usuario.findOne({
                attributes: ['id','usuario', 'nombre', 'apellido', 'direccion', 'telefono', 'telefono_casa', 'rol', 'cedula' ],
                where: {
                    id: req.params.id,
                    f_eliminacion: null
                }
            })
            .then(result => {
                return res.status(200).json(result)
            })
            .catch(error => {
                return res.status(400).json(error)
            })
		} catch( e ) {
			return next(e)
		}
    },
    store: (req, res, next) => {
        if(!req.body.nombre) {
            return res.status(400).json({
                message: "El nombre es requerido"
            })
        }
        if(!req.body.apellido) {
            return res.status(400).json({
                message: "El apellido es requerido"
            })
        }
        if(!req.body.rol) {
            return res.status(400).json({
                message: "El rol es requerido"
            })
        }
        if(!req.body.cedula) {
            return res.status(400).json({
                message: "La cedula es requerido"
            })
        }
        if(!req.body.frase) {
            return res.status(400).json({
                message: "La frase es requerida"
            })
        }
        try {
            Model.Usuario.create(req.body)
            .then(result => {
                return res.status(200).json(_.pick(result, 'id', 'nombre', 'apellido', 'cedula', 'direccion', 'telefono', 'rol'))
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
                    message: "Por favor indique el id del usuario"
                })
            }

            Model.Usuario.findById(req.params.id)
            .then(usuario => {
                let update = _.pick(req.body, ['rol', 'usuario', 'nombre', 'apellido', 'direccion', 'telefono', 'telefono_casa', 'contraseña', 'frase'])
                Object.assign(update, { f_actualizacion: Date.now() })
                usuario.update(update)
                .then(result => {
                    return res.status(200).json(result)
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

            Model.Usuario.findById(req.params.id)
            .then(usuario => {
                usuario.update({
                    f_eliminacion: Date.now()
                })
                .then(result => {
                    return res.status(200).json({
                        data: result
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