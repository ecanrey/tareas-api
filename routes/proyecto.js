// routes/proyecto.js

const express = require("express");
const router = express.Router();
const proyectoController = require('../controllers/proyecto'); // Asegúrate de que esta ruta sea correcta

// Ruta para obtener todos los proyectos
router.get("/", proyectoController.getProyectos);

// Ruta para crear un nuevo proyecto
router.post("/", proyectoController.createProyecto);

// Ruta para obtener un proyecto específico por ID
router.get("/:id", proyectoController.findOne);

// Ruta para actualizar un proyecto por ID
router.put("/:id", proyectoController.update);

// Ruta para eliminar un proyecto por ID
router.delete("/:id", proyectoController.delete);

module.exports = router;
