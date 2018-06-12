'use strict'

import User from '../models/user'
import Response from '../services/response'

const operations = {
    index: async (req, res, next) => {
        try {
            await User.find({ deletedAt: null }).exec((err, list) => {
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
    show: async (req, res, next) => {
        try {
            await User.find({ _id: req.params.id, deletedAt: null }).exec((err, list) => {
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
    store: async (req, res, next) => {
        try {
            let user = new User(req.body)

            await user.save((err, list) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(201).send(Response.showAll(201, list))
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    update: async (req, res, next) => {
        try {
            let toUpdate = req.body
            Object.assign(toUpdate, { updatedAt: Date.now() })
            
            await User.findByIdAndUpdate(req.params.id, toUpdate, { new: true }, (err, list) => {
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
    delete: async (req, res, next) => {
        try {
            await User.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() }, { new: true }, (err, list) => {
                if (err) {
                    return res.status(500).send(Response.handleFatalError(500, err.message))
                } else {
                    return res.status(200).send(Response.showAll(200, list))
                }
            })
		} catch( e ) {
			return next(e)
		}
    }
}

export default operations