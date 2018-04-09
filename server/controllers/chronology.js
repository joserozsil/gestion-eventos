'use strict'

import Chronology from '../models/chronology'
import responser from '../services/response'
import chalk from 'chalk'

const operations = {
    index: (req, res) => {
        Chronology.find().exec((err, list) => {
            if (err) {
                return res.status(500).send({ message: 'error al listar' })
            } else {
                return res.status(200).send(responser.response(200, list))
            }
        })
    },
    show: (req, res) => {
        Chronology.find({ id: req.params.id }).exec((err, list) => {
            if (err) {
                return res.status(500).send({ message: 'error al listar' })
            } else {
                return res.status(200).send(responser.response(200, list))
            }
        })
    },
    store: (req, res) => {
        let chronology = new Chronology(req.body)
        chronology.save((err, save) => {
            if (err) {
                return res.status(500).send({ message: 'error al guardar' })
            } else {
                return res.status(200).send(responser.response(200, save))
            }
        })
    },
    update: (req, res) => {
        let toUpdate = req.body 
        Chronology.findByIdAndUpdate(req.params.idChronology, toUpdate, { new: true }, (err, updated) => {
            if (err) {
                res.status(500).send(responser.error('Algho ha salido mal', err))
            } else {
                return res.status(200).send(responser.response(200, updated))
            }
        });
    },
    delete: (req, res) => {
    }
}

export default operations