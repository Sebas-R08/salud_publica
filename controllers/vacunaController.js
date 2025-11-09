
const Vacuna = require('../models/vacuna.model');


exports.listar = async (req, res) => {
  try {
    const vacunas = await Vacuna.findAll();
    res.render('vacunas/index', { titulo: 'Listado de Vacunas', vacunas });
  } catch (error) {
    console.error('Error al listar vacunas:', error);
    res.status(500).send('Error interno del servidor');
  }
};


exports.formularioNuevo = (req, res) => {
  res.render('vacunas/nuevo', { titulo: 'Registrar Vacuna' });
};


exports.crear = async (req, res) => {
  try {
    console.log(req.body)
    const { nombre, laboratorio, dosis_requeridas  } = req.body;
    await Vacuna.create({ nombre, laboratorio, dosis: dosis_requeridas  });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al crear vacuna:', error);
    res.status(500).json({ ok: false });
  }
};

// Mostrar formulario de edición
exports.formularioEditar = async (req, res) => {
  try {
    const vacuna = await Vacuna.findByPk(req.params.id);
    res.render('vacunas/editar', { titulo: 'Editar Vacuna', vacuna });
  } catch (error) {
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar vacuna
exports.actualizar = async (req, res) => {
  try {
    const { nombre, laboratorio, dosis_requeridas,  } = req.body;
    await Vacuna.update({ nombre, laboratorio, dosis: dosis_requeridas }, {
      where: { id_vacuna: req.params.id }
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
};

// Eliminar vacuna
exports.eliminar = async (req, res) => {
  try {
    await Vacuna.destroy({ where: { id_vacuna: req.params.id } });
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
};
