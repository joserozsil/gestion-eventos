'use strict'

module.exports = (sequelize, Sequelize) => {

    const Clothes = sequelize.define('Ropa', {
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
            textura: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
            talla: {
                type: Sequelize.STRING
            },
            marca: {
                type: Sequelize.STRING
            },
            fabricante: {
                type: Sequelize.STRING
            },
            peso: {
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
            tableName: 'ropas',
            underscored: true
        }
    )

    Clothes.associate = function (models) {
        models.Ropa.belongsTo(models.Evidencia,{
            foreignKey: "evidencia_id"
        })
    }

    return Clothes
}