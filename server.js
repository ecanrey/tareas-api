// server.js

const app = require('./app'); // Importa la aplicación desde app.js

// Escuchar en el puerto
const PORT = 3001; // Asegúrate de que este puerto sea el mismo que el que usas en el frontend
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
