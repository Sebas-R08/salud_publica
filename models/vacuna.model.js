
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Vacuna = sequelize.define('Vacuna', {
  id_vacuna: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'nombre_vacuna'
  },
  laboratorio: { 
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'laboratorio'
  },
  dosis: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'vacunas',
  timestamps: false
});

module.exports = Vacuna;
