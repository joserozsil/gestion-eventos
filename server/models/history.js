'use strict'

module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('Historial', {
            id: { 
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
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
        History.belongsTo(models.Usuario,{
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
        })
    }

    return History
}