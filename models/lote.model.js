const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Vacuna = require('./vacuna.model');

const Lote = sequelize.define('Lote', {
  id_lote: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_vacuna: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vacuna,
      key: 'id_vacuna'
    }
  },
  fecha_recepcion: DataTypes.DATEONLY,
  proveedor: DataTypes.STRING(100)
}, {
  tableName: 'lotes',
  timestamps: false
});

// Relación: una vacuna tiene muchos lotes
Vacuna.hasMany(Lote, { foreignKey: 'id_vacuna' });
Lote.belongsTo(Vacuna, { foreignKey: 'id_vacuna' });

module.exports = Lote;
