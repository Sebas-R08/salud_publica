const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
  host: process.env.HOST_DB,
  dialect: 'mysql',
  logging: false 
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con MySQL');
  } catch (error) {
    console.error(' Error al conectar con la base de datos:', error);
  }
})();


module.exports = sequelize;
