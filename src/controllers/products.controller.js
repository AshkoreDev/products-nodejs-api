import { pool } from './../db/db.js';


export const getProducts = async (req, res) => {
 
  try {

    const [rows] = await pool.query('SELECT * FROM products');
    
    (rows.length <= 0)
      ? res.status(404).json({ message: 'PRODUCTS NOT FOUND.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const getProduct = async (req, res) => {

  const { id } = req.params;

  try {

    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [id]);

    (rows.length <= 0)
      ? res.status(404).json({ message: 'PRODUCT NOT FOUND.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const createProduct = async (req, res) => {

  const { name, description, price } = req.body;

  try {
    
    const [rows] = await pool.query('INSERT INTO products (name, description, price) VALUES (?, ?, ?)', [name, description, price]);

    res.json({
      success: true,
      data: { id: rows.insertId, name, description, price }
    });

  } catch (error) {
   
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const updateProduct = async (req, res) => {

  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    
    const [result] = await pool.query('UPDATE products SET name=IFNULL(?, name), description=IFNULL(?, description), price=IFNULL(?, price) WHERE id=?', [name, description, price, id]);

    const [rows] = await pool.query('SELECT * FROM products WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'PRODUCT NOT FOUND.' })
      : res.json({
          success: true,
          data: rows[0]
        });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const deleteProduct = async (req, res) => {

  const { id } = req.params;

  try {

    const [result] = await pool.query('DELETE FROM products WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'PRODUCT NOT FOUND.' })
      : res.json({ success: true });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};