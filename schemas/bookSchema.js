const Joi = require('joi');

const bookSchema = Joi.object({
  titulo: Joi.string().trim().required().messages({
    'string.empty': 'El título es obligatorio'
  }),
  autor: Joi.string().trim().required().messages({
    'string.empty': 'El autor es obligatorio'
  }),
  genero: Joi.string().trim().required().messages({
    'string.empty': 'El género es obligatorio'
  }),
  publicado: Joi.date().iso().required().messages({
    'date.base': 'La fecha de publicación debe ser una fecha válida',
    'date.format': 'La fecha de publicación debe ser una fecha ISO válida'
  })
});



const updateBookSchema = Joi.object({
  titulo: Joi.string().trim().messages({
    'string.empty': 'El título no puede estar vacío'
  }),
  autor: Joi.string().trim().messages({
    'string.empty': 'El autor no puede estar vacío'
  }),
  genero: Joi.string().trim().messages({
    'string.empty': 'El género no puede estar vacío'
  }),
  publicado: Joi.date().iso().messages({
    'date.base': 'La fecha de publicación debe ser una fecha válida',
    'date.format': 'La fecha de publicación debe ser una fecha ISO válida'
  })
}).min(1);

module.exports = { bookSchema, updateBookSchema };