const pool = require(`../config/db`);

//exporta todas las peliculas
exports.getAllMovies = async() =>{

const [rows] = await pool.query(`SELECT movies.*, genre_movie.name AS genre_movie FROM movies
JOIN genre_movie ON movies.genres_id = genre_movie.id`);
return rows;
};

//exporta una peli por id

exports.getById = async(id) =>{

    const [rows] = await pool.query(`SELECT * FROM movies WHERE id =?`, [id]);
    return rows [0];
}