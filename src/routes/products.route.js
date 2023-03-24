import express from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from './../controllers/products.controller.js';

const router = express.Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.post('/products', createProduct);

router.patch('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;