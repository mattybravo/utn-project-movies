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

//service para editar las reseñas
exports.update = async (id, {comentario_reviews, rating, user_id})=>{

const [rows] = await pool.query(
`
UPDATE reviews
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

 

