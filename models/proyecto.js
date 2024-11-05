// models/proyecto.js

module.exports = (sequelize, DataTypes) => {
    const Proyecto = sequelize.define("Proyecto", {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false, // Obligatorio
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true, // Opcional
        },
        completada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Por defecto es false
        },
        fecha_creacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, // Asigna la fecha actual automáticamente
        },
        fecha_vencimiento: {
            type: DataTypes.DATE,
            allowNull: true, // Opcional
        },
        prioridad: {
            type: DataTypes.ENUM("baja", "media", "alta"),
            defaultValue: "media", // Valor por defecto
        },
        asignado_a: {
            type: DataTypes.STRING,
            allowNull: true, // Opcional
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: true, // Opcional
        },
        costo_proyecto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true, // Opcional
        },
        pagado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Por defecto es false
        }
    });

    return Proyecto;
};
