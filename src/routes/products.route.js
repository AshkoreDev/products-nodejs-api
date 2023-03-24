import express from 'express';
import { handleValidate } from './../middlewares/handleValidation.js';
import { productCreateScheme, productUpdateScheme } from '../schemes/products.schema.js';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from './../controllers/products.controller.js';


const router = express.Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.post('/products', handleValidate(productCreateScheme), createProduct);

router.patch('/products/:id', handleValidate(productUpdateScheme), updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;