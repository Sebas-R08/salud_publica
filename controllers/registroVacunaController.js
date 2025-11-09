// controllers/registroController.js
const RegistroVacunacion = require('../models/registro_vacunacion.model');
const Paciente = require('../models/paciente.model');
const Vacuna = require('../models/vacuna.model');
const Lote = require('../models/lote.model');
const Usuario = require('../models/usuario.model');

// Listar registros
exports.listar = async (req, res) => {
  try {
    const registros = await RegistroVacunacion.findAll({
      include: [Paciente, Vacuna, Lote, Usuario],
      order: [['fecha_vacunacion', 'DESC']]
    });
    res.render('registros/index', { titulo: 'Registros de Vacunación', registros });
  } catch (error) {
    console.error('Error al listar registros:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Mostrar formulario de nuevo registro
exports.formularioNuevo = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    const vacunas = await Vacuna.findAll();
    const lotes = await Lote.findAll();
    const usuarios = await Usuario.findAll();
    res.render('registros/nuevo', {
      titulo: 'Registrar Vacunación',
      pacientes,
      vacunas,
      lotes,
      usuarios
    });
  } catch (error) {
    console.error('Error al cargar formulario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear un nuevo registro
exports.crear = async (req, res) => {
  try {
    const { id_paciente, id_vacuna, id_lote, id_usuario, fecha_vacunacion, observaciones } = req.body;
    const existente = await RegistroVacunacion.findOne({
      where: { id_paciente, id_vacuna, fecha_vacunacion }
    });
    if (existente) {
      return res.status(400).json({ ok: false, msg: 'Ya existe un registro con esa vacuna y fecha para este paciente.' });
    }

    await RegistroVacunacion.create({
      id_paciente,
      id_vacuna,
      id_lote,
      id_usuario,
      fecha_vacunacion,
      observaciones
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al crear registro:', error);
    res.status(500).json({ ok: false });
  }
};


exports.eliminar = async (req, res) => {
  try {
    await RegistroVacunacion.destroy({ where: { id_registro: req.params.id } });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al eliminar registro:', error);
    res.status(500).json({ ok: false });
  }
};
