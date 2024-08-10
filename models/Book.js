//importar libreria de mongo
const mongoose = require('mongoose');

//esquema para el modelo books son string
const bookSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
  },
  autor: {
    type: String,
    required: [true, 'El autor es obligatorio'],
  },
  genero: {
    type: String,
    required: [true, 'El género es obligatorio'],
  },
  publicado: {
    type: Date,
    required: [true, 'La fecha de publicación es obligatoria'],
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;