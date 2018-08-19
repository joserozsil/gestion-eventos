'use strict'

import { encrypt } from '../services/password'

module.exports = (sequelize, Sequelize) => {

    const Portrait = sequelize.define('Retrato', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            clise: {
                type: Sequelize.STRING,
            },
            exp: {
                type: Sequelize.STRING,
            },
            dependencia: {
                type: Sequelize.STRING,
            },
            memo: {
                type: Sequelize.STRING,
            },
            memo: {
                type: Sequelize.STRING,
            },
            solicitado_por: {
                type: Sequelize.STRING,
            },
            agraviado: { // FOREIGN KEY
                type: Sequelize.STRING,
            },
            dibujante: { // FOREIGN KEY
                type: Sequelize.STRING,
            },
            dependencia: {
                type: Sequelize.STRING,
            },
            solicitado_depend: {
                type: Sequelize.STRING,
            },
            direccion: {
                type: Sequelize.STRING,
            },
            origen_datos: {
                type: Sequelize.STRING,
            },
            color_piel: {
                type: Sequelize.STRING,
            },
            boca: {
                type: Sequelize.STRING,
            },
            labios: {
                type: Sequelize.STRING,
            },
            estatura: {
                type: Sequelize.STRING,
            },
            color_cabello: {
                type: Sequelize.STRING,
            },
            peso: {
                type: Sequelize.STRING,
            },
            barba_bigote: {
                type: Sequelize.STRING,
            },
            nariz: {
                type: Sequelize.STRING,
            },
            ojos: {
                type: Sequelize.STRING,
            },
            cara: {
                type: Sequelize.STRING,
            },
            contextura: {
                type: Sequelize.STRING,
            },
            tipo_cabello: {
                type: Sequelize.STRING,
            },
            cabeza: {
                type: Sequelize.STRING,
            },
            edad: {
                type: Sequelize.STRING,
            },
            comentarios: {
                type: Sequelize.STRING,
            },
            f_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            f_actualizacion: Sequelize.DATE,
            f_eliminacion: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            }
        },
        {
            tableName: 'retratos',
            underscored: true
        }
    )
    
    return Portrait
}