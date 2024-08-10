require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const librosRoutes = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db');
const cors = require('cors'); // Importar el paquete CORS
const path = require('path');

const app = express();
const port = 3000;

// Conectar a MongoDB usando la variable de entorno
connectDB();

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Servir el archivo HTML
app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'books.html'));
});

// Rutas de libros
app.use('/api/libros', librosRoutes);

// Middleware de manejo de errores
app.use(errorHandler);


//puerto
app.listen(port, ()=> {
    console.log("Mi puerto libros"+ port);
});



//link
//http://localhost:3000/libros

