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





