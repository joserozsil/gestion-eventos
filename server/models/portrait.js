'use strict'

module.exports = (sequelize, Sequelize) => {

    const Portrait = sequelize.define('Retrato', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            estado: {
                type: Sequelize.ENUM('COMPLETADO', 'EN_PROCESO', 'ANULADO'),
                allowNull: false,
                defaultValue: 'EN_PROCESO'
            },

            clise: {
                type: Sequelize.STRING,
                unique: true
            },
            exp: {
                type: Sequelize.STRING,
                unique: true
            },

            dependencia: {
                type: Sequelize.STRING,
            },
            memo: {
                type: Sequelize.STRING,
            },
            f_memo: {
                type: Sequelize.DATE,
            },
            solicitado_por: {
                type: Sequelize.STRING,
            },
            f_caso: {
                type: Sequelize.DATE
            },
            agraviado: { // FOREIGN KEY
                type: Sequelize.STRING,
            },
            dibujante: { // FOREIGN KEY
                type: Sequelize.STRING,
            },
            f_rh: {
                type: Sequelize.DATE
            },

            dependencia2: {
                type: Sequelize.STRING,
            },
            solicitado_por2: {
                type: Sequelize.STRING
            },
            agraviado2: {
                type: Sequelize.STRING
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
            ojos_iris: {
                type: Sequelize.STRING
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
                type: Sequelize.TEXT,
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

    Portrait.associate = function (models) {
        models.Retrato.belongsTo(models.Evidencia,{
            foreignKey: "evidencia_id"
        })
    }

    return Portrait
}