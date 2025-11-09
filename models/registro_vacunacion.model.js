const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const Paciente = require('./paciente.model');
const Vacuna = require('./vacuna.model');
const Lote = require('./lote.model');
const Usuario = require('./usuario.model');

const RegistroVacunacion = sequelize.define('RegistroVacunacion', {
  id_registro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_paciente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Paciente,
      key: 'id_paciente'
    }
  },
  id_vacuna: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vacuna,
      key: 'id_vacuna'
    }
  },
  id_lote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Lote,
      key: 'id_lote'
    }
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  fecha_vacunacion: DataTypes.DATEONLY,
  observaciones: DataTypes.TEXT
}, {
  tableName: 'registros_vacunacion',
  timestamps: false
});

Paciente.hasMany(RegistroVacunacion, { foreignKey: 'id_paciente' });
RegistroVacunacion.belongsTo(Paciente, { foreignKey: 'id_paciente' });

Vacuna.hasMany(RegistroVacunacion, { foreignKey: 'id_vacuna' });
RegistroVacunacion.belongsTo(Vacuna, { foreignKey: 'id_vacuna' });

Lote.hasMany(RegistroVacunacion, { foreignKey: 'id_lote' });
RegistroVacunacion.belongsTo(Lote, { foreignKey: 'id_lote' });

Usuario.hasMany(RegistroVacunacion, { foreignKey: 'id_usuario' });
RegistroVacunacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = RegistroVacunacion;
