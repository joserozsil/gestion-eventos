'use strict'

import Chronology from '../models/chronology'
import Response from '../services/response'

const operations = {
    index: async (req, res) => {
        try {
            await Chronology.find({ deletedAt: null }).exec((err, list) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(200).send(Response.showAll(200, list))
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    show: async (req, res) => {
        try {
            await Chronology.find({ _id: req.params.id, deletedAt: null }).exec((err, list) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(200).send(Response.showAll(200, list))
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    store: async (req, res) => {
        try {
            let chronology = new Chronology(req.body)
            chronology.save((err, save) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(201).send(Response.showAll(201, save))
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    update: async (req, res) => {
        try {
            let toUpdate = req.body
            Object.assign(toUpdate, { updatedAt: Date.now() })

            await Chronology.findByIdAndUpdate(req.params.id, toUpdate, { new: true }, (err, updated) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(200).send(Response.showAll(200, updated))
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    delete: async (req, res) => {
        try {
            await Chronology.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() }, { new: true }, (err, updated) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(200).send(Response.showAll(200, updated))
                }
            })
		} catch( e ) {
			return next(e)
		}
    }
}

export default operations