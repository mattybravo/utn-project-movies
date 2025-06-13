const pool = require(`../config/db`);

//exporta todas las reseñas
exports.getAllReviews = async () =>{

  const [rows] = await pool.query(`SELECT * FROM reviews`);
  return rows;

}; 

//exporta reseña por id
exports.getById = async (id)=>{

  const [rows] = await pool.query(
    `SELECT * FROM reviews WHERE id = ? `[id]);
  return rows[0]

};

exports.create = async (reviewData, user) =>{

  const {movie_id, comentario_reviews, rating} = reviewData;

  const [result] = await pool.query(
    `INSERT INTO reviews(movie_id, user_id, comentario_reviews, rating) VALUES(?, ?, ?, ?)`,
    [user, movie_id, comentario_reviews, rating]
  );
  return {id:result.insertId, movie_id, user_id:user, comentario_reviews, rating}
  
}


//service para editar las reseñas
exports.update = async (id, {comentario_reviews, rating, user_id})=>{

  const [rows] = await pool.query(
    `UPDATE reviews
  SET comentario_reviews =?, rating = ?, user_id = ?
  WHERE id = ?`,
  [comentario_reviews, rating, user_id]
  );
  return rows;

};

//service para eliminar reseñas

exports.remove = async (id)=>{

  const [result] = await pool.query(
    `DELETE from reviews WHERE ID = ?`[id]);

  if (result.affectedRows === 0) {
    // No se encontró una reseña con ese ID
    throw new Error('Reseña no encontrada');
  }

  return { message: 'Reseña eliminada correctamente' };

};

 

