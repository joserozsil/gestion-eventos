'use strict'

module.exports = (sequelize, Sequelize) => {

    const Evidence = sequelize.define('Evidencia', {
            id: { 
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            departamento: {
                type: Sequelize.ENUM('BALISTICA', 'HECHOS', 'RECONSTRUCCION', 'RECEPCION', 'LABORATORIO'),
                allowNull: false
            },
            nombre: {
              type: Sequelize.STRING,
            },
            descripcion: {
              type: Sequelize.TEXT,
              allowNull: false
            },
            observacion: {
              type: Sequelize.TEXT,
            },
            tipo_recepcion: { // memorados u oficios
              type: Sequelize.ENUM('RECIBO_MEMORADUM', 'RECIBO_OFICIO', 'PRESENTACION_JEFE', 'PRESENTACION_FUNCIONARIO', 'SUPERVISION', 'RECIBO_GUARDIA'),
              allowNull: false
            },
            tipo_experticia: {
              type: Sequelize.ENUM('RETRATO_HABLADO'),
            },
            f_creacion: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            f_actualizacion: Sequelize.DATE,
            f_eliminacion: {
                type: Sequelize.DATE,
                defaultValue: null
            }
        },
        {
            tableName: 'evidencias',
            underscored: true
        }
    )


    Evidence.associate = function (models) {
        //models.Usuario.hasMany(models.Imagen, { as: 'imagenes' })
        
        models.Evidencia.hasMany(models.Imagen, { 
            foreignKey: 'evidencia_id'
        })

        models.Evidencia.hasOne(models.Retrato,{
            foreignKey: "evidencia_id"
        })

        models.Evidencia.belongsTo(models.Usuario,{
            onDelete: "CASCADE",
            allowNull: false
        })
    }

    return Evidence
}