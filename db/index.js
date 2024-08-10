const mongoose = require('mongoose');

// Obtener la conexion con mongo del archivo env
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/librosDB';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;