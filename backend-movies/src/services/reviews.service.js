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

// Crear reseña
exports.create = async (reviewData, userId) => {
  const { movie_id, comentario_reviews, rating } = reviewData;

  const [result] = await pool.query(
    `INSERT INTO reviews (movie_id, user_id, comentario_reviews, rating)
     VALUES (?, ?, ?, ?)`,
    [movie_id, userId, comentario_reviews, rating]
  );

  return {
    id: result.insertId,
    movie_id,
    user_id: userId,
    comentario_reviews,
    rating,
  };
};

// Obtener una reseña por ID
exports.getById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM reviews WHERE id = ?`, [id]);
  return rows[0]; // Devuelve solo una reseña
};

// Editar reseña
exports.update = async (id, { comentario_reviews, rating }) => {
  const [result] = await pool.query(
    `UPDATE reviews SET comentario_reviews = ?, rating = ? WHERE id = ?`,
    [comentario_reviews, rating, id]
  );

  if (result.affectedRows === 0) {
    throw new Error("Reseña no encontrada");
  }

  return { id, comentario_reviews, rating };
};

// Eliminar reseña
exports.remove = async (id) => {
  const [result] = await pool.query(`DELETE FROM reviews WHERE id = ?`, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Reseña no encontrada");
  }

  return { message: "Reseña eliminada correctamente" };
};


exports.getByMovieId = async (movieId) => {
  const [rows] = await pool.query(
    `SELECT r.id, r.comentario_reviews, r.rating, r.user_id, u.username AS userName
     FROM reviews r
     JOIN users u ON r.user_id = u.id
     WHERE r.movie_id = ?`,
    [movieId]
  );
  return rows;
};


