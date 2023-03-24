import express from 'express';
import productsRoute from './routes/products.route.js';

const app = express();

app.use(express.json());

app.use('/api', productsRoute);

app.use((req, res) => res.status(404).json({ message: 'ENDPOINT NOT FOUND.' }));

export default app;