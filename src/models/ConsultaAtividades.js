const { Model, DataTypes } = require('sequelize');

class ConsultaAtividades extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreData: {
                type: DataTypes.DATE,
                allowNull: false
            },
            TreTitulo: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            TreAtvDesc: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
        }, {
            sequelize
        })
    }
}
module.exports = ConsultaAtividades;