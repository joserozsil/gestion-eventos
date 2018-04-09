'use strict'

import Chronology from '../models/chronology'
import responser from '../services/response'
import chalk from 'chalk'

const operations = {
    index: (req, res) => {
        Chronology.find({ isDelete: null }).exec((err, list) => {
            if (err) {
                return res.status(500).send({message: err})
            } else {
                return res.status(200).send(responser.response(200, list))
            }
        })
    },
    show: (req, res) => {
        Chronology.find({ _id: req.params.idChronology, isDelete: null }).exec((err, list) => {
            if (err) {
                return res.status(500).send({message: err})
            } else {
                return res.status(200).send(responser.response(200, list))
            }
        })
    },
    store: (req, res) => {
        let chronology = new Chronology(req.body)
        chronology.save((err, save) => {
            if (err) {
                return res.status(500).send({ message: 'error al listar', error: err })
            } else {
                return res.status(200).send(responser.response(200, save))
            }
        })
    },
    update: (req, res) => {
        let toUpdate = req.body 
        Chronology.findByIdAndUpdate(req.params.idChronology, toUpdate, { new: true }, (err, updated) => {
            if (err) {
                res.status(500).send({message: err})
            } else {
                return res.status(200).send(responser.response(200, updated))
            }
        });
    },
    delete: (req, res) => {
        Chronology.findByIdAndUpdate(req.params.idChronology, { isDelete: Date.now() }, { new: true }, (err, updated) => {
            if (err) {
                res.status(500).send({message: err})
            } else {
                return res.status(200).send(responser.response(200, updated))
            }
        });
    }
}

export default operations