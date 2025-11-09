const pacienteController = require('./controllers/pacienteController');
const vacunaController = require('./controllers/vacunaController');
const registroVacunaController = require('./controllers/registroVacunaController');
const loteController = require('./controllers/loteController');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render("index", { titulo: "Página Principal" });
    });
    app.get('/pacientes', pacienteController.listar);
    app.get('/pacientes/nuevo', pacienteController.formularioNuevo);
    app.post('/pacientes/nuevo', pacienteController.crear);
    app.get('/pacientes/editar/:id', pacienteController.formularioEditar);
    app.post('/pacientes/editar/:id', pacienteController.actualizar);
    app.get('/pacientes/eliminar/:id', pacienteController.eliminar);

    app.get("/vacunas", vacunaController.listar);
    app.get("/vacunas/nuevo", vacunaController.formularioNuevo);
    app.post("/vacunas/nuevo", vacunaController.crear);
    app.get("/vacunas/editar/:id", vacunaController.formularioEditar);
    app.post("/vacunas/editar/:id", vacunaController.actualizar);
    app.get("/vacunas/eliminar/:id", vacunaController.eliminar);

    app.get('/registros', registroVacunaController.listar);
    app.get('/registros/nuevo', registroVacunaController.formularioNuevo);
    app.post('/registros/nuevo', registroVacunaController.crear);
    app.get('/registros/eliminar/:id', registroVacunaController.eliminar);

    app.get('/lotes', loteController.listar);
    app.get('/lotes/nuevo', loteController.formularioNuevo);
    app.post('/lotes/nuevo', loteController.crear);
    app.get('/lotes/eliminar/:id', loteController.eliminar);
};
