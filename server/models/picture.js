'use strict'

module.exports = (sequelize, Sequelize) => {
    const Picture = sequelize.define('Imagen', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            localizacion: {
                type: Sequelize.STRING,
            },
            nombre_archivo: {
              type: Sequelize.STRING,
            },
            extension: {
                type: Sequelize.STRING,
            },
            descripcion: {
                type: Sequelize.STRING,
            },
            f_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            f_eliminacion: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            }
        },
        {
            tableName: 'imagenes',
            underscored: true
        }
    )

    Picture.associate = function (models) {
        Picture.belongsTo(models.Evidencia,{
            onDelete: "CASCADE",
            foreignKey: 'evidencia_id'
        })
    }

    return Picture
}