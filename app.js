// app.js

const express = require("express");
const app = express();
const db = require("./config/db.config.js");
const proyectoRoutes = require("./routes/proyecto.js");

// Configuración para parsear JSON
app.use(express.json());

// Rutas para el recurso "Proyecto"
app.use("/api/proyectos", proyectoRoutes);

// Sincroniza la base de datos (opcional, solo para desarrollo)
db.sequelize.sync().then(() => {
    console.log("Base de datos sincronizada.");
});

module.exports = app; // Exporta la aplicación para que pueda ser utilizada en server.js