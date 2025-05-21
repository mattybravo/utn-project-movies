const pool = require(`../config/db`);

//exporta todas las peliculas
exports.getAllMovies = async() =>{

const [rows] = await pool.query(`SELECT * FROM movies`);
return rows;
};
