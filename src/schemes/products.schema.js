import Joi from 'joi';

const name = Joi.string().min(1).max(50).messages({
  'string.base': 'The name must be a string',
  'string.empty': 'The name cannot be empty',
  'string.min': 'The name must be larger than or equal to 1',
  'string.max': 'The name must be less than or equal to 50'
});

const description = Joi.string().min(1).max(100).messages({
  'string.base': 'The description must be a string',
  'string.empty': 'The description cannot be empty',
  'string.min': 'The description must be larger than or equal to 1',
  'string.max': 'The description must be less than or equal to 100'
});

const price = Joi.number().positive().precision(2).min(1).messages({
  'string.base': 'The price must be a string',
  'string.empty': 'The price cannot be empty',
  'string.min': 'The price must be larger than or equal to 1'
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