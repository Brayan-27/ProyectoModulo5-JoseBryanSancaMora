const express = require('express');
const validatorHandler = require('../middleware/joiValidator');
const { bookSchema, updateBookSchema } = require('../schemas/bookSchema');
const Book = require('../models/Book');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { titulo, autor, genero } = req.query;
    const query = {};
    
    if (titulo) query.titulo = new RegExp(titulo, 'i');
    if (autor) query.autor = new RegExp(autor, 'i');
    if (genero) query.genero = new RegExp(genero, 'i');
    

    const libros = await Book.find(query);
    res.json(libros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const libro = await Book.findById(req.params.id);
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado :(' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', validatorHandler(bookSchema, 'body'), async (req, res) => {
  try {
    const nuevoLibro = new Book(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', validatorHandler(updateBookSchema, 'body'), async (req, res) => {
  try {
    const libro = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado :(' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const libro = await Book.findByIdAndDelete(req.params.id);
    if (libro) {
      res.json({ message: 'Libro eliminado con exito' });
    } else {
      res.status(404).json({ message: 'Libro no encontrado :(' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;