const Lote = require('../models/lote.model');
const Vacuna = require('../models/vacuna.model');

// Listar lotes
exports.listar = async (req, res) => {
  try {
    const lotes = await Lote.findAll({ include: [Vacuna] });
    res.render('lotes/index', { titulo: 'Gestión de Lotes', lotes });
  } catch (error) {
    console.error('Error al listar lotes:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Formulario nuevo lote
exports.formularioNuevo = async (req, res) => {
  try {
    const vacunas = await Vacuna.findAll();
    res.render('lotes/nuevo', { titulo: 'Registrar Lote', vacunas });
  } catch (error) {
    console.error('Error al cargar formulario:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear lote
exports.crear = async (req, res) => {
  try {
    const { id_vacuna, fecha_recepcion, proveedor } = req.body;
    await Lote.create({  id_vacuna, fecha_recepcion, proveedor });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al crear lote:', error);
    res.status(500).json({ ok: false });
  }
};

// Eliminar lote
exports.eliminar = async (req, res) => {
  try {
    await Lote.destroy({ where: { id_lote: req.params.id } });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al eliminar lote:', error);
    res.status(500).json({ ok: false });
  }
};
