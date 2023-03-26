import { pool } from './../db/db.js';


export const getProducts = async (req, res) => {
 
  try {

    const [rows] = await pool.query('SELECT * FROM products');
    
    (rows.length <= 0)
      ? res.status(404).json({ message: 'PPRODUCTOS NO ENCONTRADOS.' })
      : res.json({ data: rows });

  } catch (error) {

    return res.status(500).json({ success: 'error', message: 'ALGO SALIÓ MAL.' });
  }
};


export const getProduct = async (req, res) => {

  const { id } = req.params;

  try {

    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [id]);

    (rows.length <= 0)
      ? res.status(404).json({ message: 'PRODUCTO NO ENCONTRADO.' })
      : res.json({ data: rows });

  } catch (error) {

    return res.status(500).json({ success: 'error', message: 'ALGO SALIÓ MAL.' });
  }
};


export const createProduct = async (req, res) => {

  console.log(req.body);
  const { name, description, price } = req.body;

  try {
    
    const [rows] = await pool.query('INSERT INTO products (name, description, price) VALUES (?, ?, ?)', [name, description, price]);

    res.status(200).json({ success: 'success', message: 'PRODUCTO REGISTRADO' });

  } catch (error) {
   
    return res.status(500).json({ success: 'error', message: 'ALGO SALIÓ MAL.' });
  }
};


export const updateProduct = async (req, res) => {

  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    
    const [result] = await pool.query('UPDATE products SET name=IFNULL(?, name), description=IFNULL(?, description), price=IFNULL(?, price) WHERE id=?', [name, description, price, id]);
    
    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'PRODUCTO NO ENCONTRADO.' })
      : res.status(200).json({ success: 'success', message: 'PRODUCTO MODIFICADO' });

  } catch (error) {
    
    return res.status(500).json({ success: 'error', message: 'ALGO SALIÓ MAL.' });
  }
};


export const deleteProduct = async (req, res) => {

  const { id } = req.params;

  try {

    const [result] = await pool.query('DELETE FROM products WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'PRODUCTO NO ENCONTRADO.' })
      : res.status(200).json({ success: 'success', message: 'PRODUCTO ELIMINADO' });

      console.log(result);

  } catch (error) {
    
    return res.status(500).json({ success: 'error', message: 'ALGO SALIÓ MAL.' });
  }
};