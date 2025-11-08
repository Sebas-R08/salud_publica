const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Rol = require('./rol.model');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Rol,
      key: 'id_rol'
    }
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

// Relación: Un rol tiene muchos usuarios
Rol.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

module.exports = Usuario;
