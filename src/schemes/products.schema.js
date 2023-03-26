import Joi from 'joi';

const name = Joi.string().min(1).max(50).messages({
  'string.base': 'El campo Nombre debe ser de tipo Texto',
  'string.empty': 'El campo Nombre no puede estar vacío',
  'string.min': 'El campo Nombre debe ser mayor o igual a 1',
  'string.max': 'El campo Nombre debe ser mayor o igual a 50'
});

const description = Joi.string().min(1).max(100).messages({
  'string.base': 'El campo Descripción debe ser de tipo Texto',
  'string.empty': 'El campo Descripción no puede estar vacío',
  'string.min': 'El campo Descripción debe ser mayor o igual a 1',
  'string.max': 'El campo Descripción debe ser mayor o igual a 100'
});

const price = Joi.string().min(1).max(30).messages({
  'string.base': 'El campo Precio debe ser de tipo Numérico',
  'string.empty': 'El campo Precio no puede estar vacío',
  'string.min': 'El campo Precio debe ser mayor o igual a 1',
  'string.max': 'El campo Precio debe ser mayor o igual a 30'
});


export const productCreateScheme = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required()
});

export const productUpdateScheme = Joi.object({
  name: name,
  description: description,
  price: price
});