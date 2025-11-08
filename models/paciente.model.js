const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Paciente = sequelize.define('Paciente', {
  id_paciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  documento: DataTypes.STRING(50),
  fecha_nacimiento: DataTypes.DATEONLY,
  direccion: DataTypes.STRING(150)
}, {
  tableName: 'pacientes',
  timestamps: false
});

module.exports = Paciente;
