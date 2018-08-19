'use strict'

module.exports = (sequelize, DataTypes) => {
    const Access = sequelize.define('Acceso', {
            id: { 
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario: {
                type: DataTypes.STRING
            },
            ip: {
                type: DataTypes.STRING,
            },
            f_creacion: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: 'accesos',
            underscored: true
        }
    )
    
    Access.associate = function (models) {
        Access.belongsTo(models.Usuario, {
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: false
            }
        })
    }

    return Access
}