const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Vacuna = sequelize.define('Vacuna', {
  id_vacuna: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_vacuna: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipo_vacuna: DataTypes.STRING(50),
  dosis: DataTypes.INTEGER
}, {
  tableName: 'vacunas',
  timestamps: false
});

module.exports = Vacuna;
