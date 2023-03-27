import express from 'express';
import cors from 'cors';
import productsRoute from './routes/products.route.js';

const app = express();

const whiteList = ['http://localhost:3000'];

const corsOptions = {

  origin: (origin, callback) => {

    (whiteList.indexOf(origin) !== -1 || !origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  }
};

app.use(cors());

app.use(express.json());

app.use('/api', productsRoute);

app.use((req, res) => res.status(404).json({ message: 'ERROR EN LA SOLICITUD.' }));

export default app;