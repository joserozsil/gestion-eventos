'use strict'

module.exports = (sequelize, Sequelize) => {

    const Arm = sequelize.define('Arma', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            

            clise: {
                type: Sequelize.STRING,
                unique: true
            },
            exp: {
                type: Sequelize.STRING,
                unique: true
            },

            tipo: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
            calibre: {
                type: Sequelize.STRING
            },
            longitud_cañon: {
                type: Sequelize.STRING
            },
            dimensiones: {
                type: Sequelize.STRING
            },
            peso: {
                type: Sequelize.STRING
            },
            peso_cargador: {
                type: Sequelize.STRING
            },
            miras: {
                type: Sequelize.STRING
            },
            capacidad_cargador: {
                type: Sequelize.STRING
            },
            disparador: {
                type: Sequelize.STRING
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
            tableName: 'armas',
            underscored: true
        }
    )

    Arm.associate = function (models) {
        models.Arma.belongsTo(models.Evidencia,{
            foreignKey: "evidencia_id"
        })
    }

    return Arm
}