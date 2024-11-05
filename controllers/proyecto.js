// controllers/proyecto.js

const db = require("../config/db.config.js"); // Importa la configuración de la base de datos
const Proyecto = db.Proyecto; // Importa el modelo "Proyecto"

// Controlador para crear un nuevo proyecto
exports.createProyecto = async (req, res) => {
    try {
        const nuevoProyecto = await Proyecto.create(req.body);
        res.status(201).json(nuevoProyecto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener todos los proyectos
exports.getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.status(200).json(proyectos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un proyecto por ID
exports.findOne = async (req, res) => {
    try {
        const proyecto = await Proyecto.findByPk(req.params.id);
        if (proyecto) {
            res.status(200).json(proyecto);
        } else {
            res.status(404).json({ message: "Proyecto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un proyecto
exports.update = async (req, res) => {
    try {
        const [updated] = await Proyecto.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedProyecto = await Proyecto.findByPk(req.params.id);
            res.status(200).json(updatedProyecto);
        } else {
            res.status(404).json({ message: "Proyecto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un proyecto
exports.delete = async (req, res) => {
    try {
        const deleted = await Proyecto.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Proyecto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
