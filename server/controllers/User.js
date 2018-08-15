'use strict'

import Model from '../models/user'

const operations = {
    index: (req, res, next) => {
        try {
            Model.find(
                { deletedAt: null }, 
                'username firstName lastName idCard address phone',
                {
                    skip: req.query.skip || 0,
                    limit: req.query.limit || 15
                }
            )
            .sort({
                createdAt: -1
            })
            .exec((err, list) => {
                if (err) {
                    return res.status(500).send(err.message)
                } else {
                    return res.status(200).send(list)
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    show: (req, res, next) => {
        try {
            Model.find({ _id: req.params.id, deletedAt: null })
            .exec((err, list) => {
                if (err) {
                    return res.status(500).send(err.message)
                } else {
                    return res.status(200).send(list)
                }
            })
		} catch( e ) {
            return next(e)
		}
    },
    store: (req, res, next) => {
        try {
            let model = new Model(req.body)
            model.save((err, list) => {
                if (err) {
                    return res.status(500).send(err.message)
                } else {
                    return res.status(200).send(list)
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    update: (req, res, next) => {
        try {
            let toUpdate = req.body
            Object.assign(toUpdate, { updatedAt: Date.now() })
            
            Model.findByIdAndUpdate(req.params.id, toUpdate, { new: true }, (err, list) => {
                if (err) {
                    return res.status(500).send(err.message)
                } else {
                    return res.status(200).send(list)
                }
            })
		} catch( e ) {
			return next(e)
		}
    },
    delete: (req, res, next) => {
        try {
            Model.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() }, { new: true }, (err, list) => {
                if (err) {
                    return res.status(500).send(err.message)
                } else {
                    return res.status(200).send(list)
                }
            })
		} catch( e ) {
			return next(e)
		}
    }
}

export default operations