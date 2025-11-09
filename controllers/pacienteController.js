const Paciente = require('../models/paciente.model');
const sequelize = require('../models/db');


exports.listar = async (req, res) => {
  const pacientes = await Paciente.findAll();
  res.render('pacientes/index', { titulo: 'Listado de Pacientes', pacientes });
};


exports.formularioNuevo = (req, res) => {
  res.render('pacientes/nuevo', { titulo: 'Registrar Paciente' });
};


exports.crear = async (req, res) => {
  const { nombre, tipo, documento, fecha_nacimiento, direccion } = req.body;
  const t = await sequelize.transaction();
  try {
    await Paciente.create({ nombre, tipo, documento, fecha_nacimiento, direccion }, { transaction: t });
    await t.commit(); 
    res.redirect('/pacientes');
  } catch (error) {
    await t.rollback(); 
    console.error(' Error al crear paciente:', error);
    res.status(500).send('Error al registrar el paciente');
  }
};


exports.formularioEditar = async (req, res) => {
  const paciente = await Paciente.findByPk(req.params.id);
  res.render('pacientes/editar', { titulo: 'Editar Paciente', paciente });
};

// Actualizar paciente
exports.actualizar = async (req, res) => {
  const { nombre, tipo, documento, fecha_nacimiento, direccion } = req.body;
  try {
    await Paciente.update(
      { nombre, tipo, documento, fecha_nacimiento, direccion },
      { where: { id_paciente: req.params.id } }
    );
    res.redirect('/pacientes');
  } catch (error) {
    console.error(' Error al actualizar paciente:', error);
    res.status(500).send('Error al actualizar');
  }
};

// Eliminar paciente
exports.eliminar = async (req, res) => {
  try {
    await Paciente.destroy({ where: { id_paciente: req.params.id } });
    res.redirect('/pacientes');
  } catch (error) {
    console.error(' Error al eliminar paciente:', error);
    res.status(500).send('Error al eliminar');
  }
};
