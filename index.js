// ================================
// index.js - Servidor principal
// Proyecto: Eje 3 - salud_publica
// ================================

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Carpeta donde estarán las vistas EJS

// ==========================
// Middleware
// ==========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Para archivos estáticos (Bootstrap, CSS, imágenes, etc.)


require('./routes')(app); 


app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});
