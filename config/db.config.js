// config/db.config.js

const env = require('./env.js'); // Importa las configuraciones del entorno
const Sequelize = require('sequelize'); // Importa Sequelize

// Inicializa la conexión a la base de datos usando las configuraciones de entorno
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Configuración para SSL si es necesario
        }
    },
    pool: {
        max: env.pool.max, // Número máximo de conexiones en el pool
        min: env.pool.min, // Número mínimo de conexiones en el pool
        acquire: env.pool.acquire, // Tiempo máximo en milisegundos para adquirir una conexión
        idle: env.pool.idle // Tiempo máximo en milisegundos para liberar una conexión inactiva
    }
});

// Crea el objeto para exportar y asigna Sequelize y la conexión
const db = {};

// Asigna Sequelize y la instancia de conexión
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa el modelo de Proyecto
db.Proyecto = require('../models/proyecto.js')(sequelize, Sequelize); // Modelo de Proyecto

module.exports = db; // Exporta el objeto de la base de datos
