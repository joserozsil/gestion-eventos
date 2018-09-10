'use strict'

module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('Historial', {
            id: { 
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            descripcion: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            f_creacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: 'historial',
            underscored: true
        }
    )

    History.associate = function (models) {
        models.Historial.belongsTo(models.Usuario,{
            foreignKey: "usuario_id"
        })
    }

    return History
}